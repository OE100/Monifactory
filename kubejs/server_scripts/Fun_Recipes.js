ServerEvents.recipes(event => {
    // pretty sus if you ask me
    event.recipes.shaped(
        'gtceu:sus_record', [
            'SSS',
            'SRS',
            'SSS'
        ], {
            R: 'gtceu:polyvinyl_chloride_ring',
            S: Item.of('minecraft:written_book', { display: { Name : '{"text":"ඞ"}'}}).weakNBT()
        }
    ).id('gtceu:sus_record')
})