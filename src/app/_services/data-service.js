import { supabase } from "./supabase";

export async function getWorks() {
    const { data, error } = await supabase
        .from('myWorks')
        .select('*')

    if (error) {
        console.error('Error fetching projects:', error)
        throw new Error('Failed to fetch projects')
    }

    console.log(data);

    return data;
}

export async function getSomeWorks() {
    const { data, error } = await supabase
        .from('myWorks')
        .select('*')
        .limit(2)

    if (error) {
        console.error('Error fetching some projects:', error)
        throw new Error('Failed to fetch projects')
    }

    return data;
}

export async function getWorkById(id) {
    const { data, error } = await supabase
        .from('myWorks')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error(`Error fetching project with id ${id}:`, error)
        throw new Error(`Failed to fetch project with id ${id}`)
    }

    return data;
}