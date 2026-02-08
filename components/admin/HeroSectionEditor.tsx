'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Save, Upload, GripVertical, Eye, Image as ImageIcon } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { uploadToCloudinary } from '@/lib/cloudinary'
import Image from 'next/image'

interface HeroSlide {
    id?: number
    order_index: number
    active: boolean
    title_ar: string
    title_fr: string
    title_en: string
    subtitle_ar: string
    subtitle_fr: string
    subtitle_en: string
    description_ar: string
    description_fr: string
    description_en: string
    cta_ar: string
    cta_fr: string
    cta_en: string
    link: string
    icon_name: string
    gradient_class: string
    image_url: string
}

export default function HeroSectionEditor({ lang }: { lang: 'ar' | 'fr' | 'en' }) {
    const supabase = createClient()
    const [slides, setSlides] = useState<HeroSlide[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [isUploading, setIsUploading] = useState<number | null>(null)

    useEffect(() => {
        fetchSlides()
    }, [])

    const fetchSlides = async () => {
        const { data, error } = await supabase
            .from('dynamic_hero_slides')
            .select('*')
            .order('order_index', { ascending: true })

        if (error) {
            console.error('Error fetching slides:', error)
        } else {
            setSlides(data || [])
        }
        setLoading(false)
    }

    const addSlide = () => {
        const newSlide: HeroSlide = {
            order_index: slides.length,
            active: true,
            title_ar: '', title_fr: '', title_en: '',
            subtitle_ar: '', subtitle_fr: '', subtitle_en: '',
            description_ar: '', description_fr: '', description_en: '',
            cta_ar: '', cta_fr: '', cta_en: '',
            link: '',
            icon_name: 'Zap',
            gradient_class: 'from-blue-600 to-cyan-500',
            image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80'
        }
        setSlides([...slides, newSlide])
    }

    const removeSlide = (index: number) => {
        setSlides(slides.filter((_, i) => i !== index))
    }

    const updateSlide = (index: number, updates: Partial<HeroSlide>) => {
        const newSlides = [...slides]
        newSlides[index] = { ...newSlides[index], ...updates }
        setSlides(newSlides)
    }

    const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setIsUploading(index)
        try {
            const url = await uploadToCloudinary(file)
            updateSlide(index, { image_url: url })
        } catch (error) {
            alert('Upload failed. Please check your Cloudinary configuration.')
        } finally {
            setIsUploading(null)
        }
    }

    const saveChanges = async () => {
        setSaving(true)

        // 1. Delete all existing slides (simple approach for now)
        // In a real app, you'd want to use Upsert or handle deletions properly
        await supabase.from('dynamic_hero_slides').delete().neq('id', 0)

        // 2. Insert new slides
        const slidesToInsert = slides.map((s, i) => ({
            ...s,
            id: undefined, // Remove ID to allow serial generation
            order_index: i
        }))

        const { error } = await supabase.from('dynamic_hero_slides').insert(slidesToInsert)

        if (error) {
            alert('Error saving slides: ' + error.message)
        } else {
            alert('Successfully saved!')
            fetchSlides()
        }
        setSaving(false)
    }

    if (loading) return <div className="text-white">Loading hero content...</div>

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Hero Section Editor</h2>
                    <p className="text-gray-400">Customize the slides that appear on your homepage</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={addSlide}
                        className="flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 rounded-xl hover:bg-[#C5A059]/20 transition-all font-semibold"
                    >
                        <Plus className="w-5 h-5" />
                        Add Slide
                    </button>
                    <button
                        onClick={saveChanges}
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#C5A059] to-[#8B7355] text-white rounded-xl hover:shadow-lg hover:shadow-[#C5A059]/20 transition-all font-bold disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        {saving ? 'Saving...' : 'Save All Changes'}
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {slides.map((slide, index) => (
                    <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={() => removeSlide(index)}
                                className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all"
                                title="Remove slide"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Preview & Image */}
                            <div className="space-y-6">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 group">
                                    <Image
                                        src={slide.image_url}
                                        alt="Preview"
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex flex-center justify-center">
                                        <label className="cursor-pointer flex flex-col items-center gap-2 p-4 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-all border border-white/20">
                                            <Upload className="w-6 h-6" />
                                            <span className="text-xs font-bold uppercase tracking-widest">{isUploading === index ? 'Uploading...' : 'Change Image'}</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => handleFileUpload(index, e)}
                                                disabled={isUploading === index}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Appearance</label>
                                    <input
                                        type="text"
                                        value={slide.gradient_class}
                                        onChange={(e) => updateSlide(index, { gradient_class: e.target.value })}
                                        placeholder="Tailwind Gradient Classes (e.g. from-blue-600 to-cyan-500)"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-[#C5A059] outline-none transition-all"
                                    />
                                    <input
                                        type="text"
                                        value={slide.icon_name}
                                        onChange={(e) => updateSlide(index, { icon_name: e.target.value })}
                                        placeholder="Lucide Icon Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-[#C5A059] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Content Inputs */}
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Arabic */}
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-[#C5A059] uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                                        Arabic Content
                                    </label>
                                    <input
                                        dir="rtl"
                                        value={slide.title_ar}
                                        onChange={(e) => updateSlide(index, { title_ar: e.target.value })}
                                        placeholder="العنوان"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <input
                                        dir="rtl"
                                        value={slide.subtitle_ar}
                                        onChange={(e) => updateSlide(index, { subtitle_ar: e.target.value })}
                                        placeholder="العنوان الفرعي"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <textarea
                                        dir="rtl"
                                        rows={3}
                                        value={slide.description_ar}
                                        onChange={(e) => updateSlide(index, { description_ar: e.target.value })}
                                        placeholder="الوصف"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none resize-none"
                                    />
                                </div>

                                {/* French */}
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        French Content
                                    </label>
                                    <input
                                        value={slide.title_fr}
                                        onChange={(e) => updateSlide(index, { title_fr: e.target.value })}
                                        placeholder="Titre"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <input
                                        value={slide.subtitle_fr}
                                        onChange={(e) => updateSlide(index, { subtitle_fr: e.target.value })}
                                        placeholder="Sous-titre"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <textarea
                                        rows={3}
                                        value={slide.description_fr}
                                        onChange={(e) => updateSlide(index, { description_fr: e.target.value })}
                                        placeholder="Description"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none resize-none"
                                    />
                                </div>

                                {/* English */}
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                        English Content
                                    </label>
                                    <input
                                        value={slide.title_en}
                                        onChange={(e) => updateSlide(index, { title_en: e.target.value })}
                                        placeholder="Title"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <input
                                        value={slide.subtitle_en}
                                        onChange={(e) => updateSlide(index, { subtitle_en: e.target.value })}
                                        placeholder="Subtitle"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none"
                                    />
                                    <textarea
                                        rows={3}
                                        value={slide.description_en}
                                        onChange={(e) => updateSlide(index, { description_en: e.target.value })}
                                        placeholder="Description"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#C5A059] outline-none resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
