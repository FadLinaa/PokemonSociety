interface pokemon {
    id: number 
    identifier: string
    species_id: number
    height:number
    weight : number
    base_experience :number
    order : number
    is_default:number
}
 interface type {
    id: number 
    identifier: string
    generation_id:number
    damage_class_id : number
 }

 interface moves {
    id: number
identifier: string
generation_id: number
type_id: number
power: number
pp : number
accuracy: number
priority: number
target_id: number
damage_class_id: number
effect_id: number
effect_chance : number
contest_type_id : string
contest_effect_id : number 
super_contest_effect_id : number
}

interface egg_groups {
id: number
identifier : string
}

export {pokemon, moves,type, egg_groups}
