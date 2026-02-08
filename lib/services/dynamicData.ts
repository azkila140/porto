import { createPublicClient } from '@/lib/supabase/public'
import { unstable_cache } from 'next/cache'

/**
 * Fetch hero slides with caching
 */
export const getCachedHeroSlides = unstable_cache(
    async () => {
        const supabase = createPublicClient()
        const { data, error } = await supabase
            .from('dynamic_hero_slides')
            .select('*')
            .eq('active', true)
            .order('order_index', { ascending: true })

        if (error) {
            console.error('Error fetching hero slides:', error)
            return []
        }
        return data || []
    },
    ['hero-slides'],
    {
        revalidate: 3600, // 1 hour
        tags: ['dynamic-data', 'hero-slides']
    }
)

/**
 * Fetch services with caching
 */
export const getCachedServices = unstable_cache(
    async () => {
        const supabase = createPublicClient()
        const { data, error } = await supabase
            .from('dynamic_services')
            .select('*')
            .eq('active', true)
            .order('order_index', { ascending: true })

        if (error) {
            console.error('Error fetching services:', error)
            return []
        }
        return data || []
    },
    ['services'],
    {
        revalidate: 3600, // 1 hour
        tags: ['dynamic-data', 'services']
    }
)
