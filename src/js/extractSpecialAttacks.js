function extractSpecialAttacks({ special }) {
    const extractedAttacks = [];
    special.forEach(({ id, name, description = 'Описание недоступно', icon }) => {
        extractedAttacks.push({ id, name, description, icon });
    });
    return extractedAttacks;
}

module.exports = { extractSpecialAttacks };