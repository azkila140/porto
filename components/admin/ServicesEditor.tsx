'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Save, Upload, Code2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { uploadToCloudinary } from '@/lib/cloudinary'
import Image from 'next/image'

interface Service {
    id?: number
    order_index: number
    active: boolean
    title_ar: string; title_fr: string; title_en: string
    description_ar: string; description_fr: string; description_en: string
    icon_name: string
    gradient_class: string
    image_url: string
}

export default function ServicesEditor({ lang }: { lang: 'ar' | 'fr' | 'en' }) {
    const supabase = createClient()
    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [isUploading, setIsUploading] = useState<number | null>(null)

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        const { data, error } = await supabase
            .from('dynamic_services')
            .select('*')
            .order('order_index', { ascending: true })

        if (error) {
            console.error('Error fetching services:', error)
        } else {
            setServices(data || [])
        }
        setLoading(false)
    }

    const addService = () => {
        const newService: Service = {
            order_index: services.length,
            active: true,
            title_ar: '', title_fr: '', title_en: '',
            description_ar: '', description_fr: '', description_en: '',
            icon_name: 'Code2',
            gradient_class: 'from-blue-500 to-cyan-500',
            image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
        }
        setServices([...services, newService])
    }

    const removeService = (index: number) => {
        setServices(services.filter((_, i) => i !== index))
    }

    const updateService = (index: number, updates: Partial<Service>) => {
        const newServices = [...services]
        newServices[index] = { ...newServices[index], ...updates }
        setServices(newServices)
    }

    const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setIsUploading(index)
        try {
            const url = await uploadToCloudinary(file)
            updateService(index, { image_url: url })
        } catch (error) {
            alert('Upload failed.')
        } finally {
            setIsUploading(null)
        }
    }

    const saveChanges = async () => {
        setSaving(true)
        await supabase.from('dynamic_services').delete().neq('id', 0)
        const toInsert = services.map((s, i) => ({ ...s, id: undefined, order_index: i }))
        const { error } = await supabase.from('dynamic_services').insert(toInsert)

        if (error) {
            alert('Error saving: ' + error.message)
        } else {
            alert('Successfully saved!')
            fetchServices()
        }
        setSaving(false)
    }

    if (loading) return <div className="text-white">Loading services...</div>

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Services / Bento Grid Editor</h2>
                    <p className="text-gray-400">Manage the 6 service cards displayed in the Bento Grid</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={addService} className="flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 rounded-xl hover:bg-[#C5A059]/20 transition-all font-semibold">
                        <Plus className="w-5 h-5" /> Add Card
                    </button>
                    <button onClick={saveChanges} disabled={saving} className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#C5A059] to-[#8B7355] text-white rounded-xl hover:shadow-lg transition-all font-bold disabled:opacity-50">
                        <Save className="w-5 h-5" /> {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="relative w-32 h-20 rounded-xl overflow-hidden border border-white/10">
                                <Image src={service.image_url} alt="" fill className="object-cover" />
                                <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
                                    <Upload className="w-4 h-4" />
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(index, e)} />
                                </label>
                            </div>
                            <button onClick={() => removeService(index)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <input value={service.title_en} onChange={(e) => updateService(index, { title_en: e.target.value })} placeholder="Title (EN)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059]" />
                            <textarea value={service.description_en} onChange={(e) => updateService(index, { description_en: e.target.value })} placeholder="Description (EN)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059] resize-none" rows={2} />

                            <div className="grid grid-cols-2 gap-4">
                                <input value={service.title_ar} dir="rtl" onChange={(e) => updateService(index, { title_ar: e.target.value })} placeholder="العنوان (AR)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059]" />
                                <input value={service.title_fr} onChange={(e) => updateService(index, { title_fr: e.target.value })} placeholder="Titre (FR)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059]" />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <input value={service.icon_name} onChange={(e) => updateService(index, { icon_name: e.target.value })} placeholder="Icon (Lucide)" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059]" />
                            <input value={service.gradient_class} onChange={(e) => updateService(index, { gradient_class: e.target.value })} placeholder="Gradient class" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C5A059]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
