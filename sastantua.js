function sastantua(levels) {
    if (levels < 1) {
        console.log("Trebuie să fie cel puțin un nivel.");
        return;
    }
 
    let totalWidth = calculateTotalWidth(levels);
 
    let currentWidth = 1;
    for (let level = 1; level <= levels; level++) {
        let height = level + 2;
 
        for (let row = 0; row < height; row++) {
            let spaces = Math.floor((totalWidth - currentWidth) / 2);
 
            if (level === levels && levels >= 5 && row >= height - Math.min(levels, height)) {
                // Adăugăm ușa pentru ultimele rânduri ale ultimului nivel
                let doorWidth = levels; // Lățimea ușii este egală cu numărul de niveluri
                let doorStart = Math.floor((currentWidth - doorWidth) / 2);
                let doorHeight = levels; // Înălțimea ușii este egală cu numărul de niveluri
                let clantaRow = Math.floor(doorHeight / 2); // Clanta este pe rândul din mijloc
                let clantaPos = doorStart + Math.floor(doorWidth / 2) + 1; // Clanta cu o linie mai în dreapta
 
                let line = " ".repeat(spaces);
                for (let i = 0; i < currentWidth; i++) {
                    if (i >= doorStart && i < doorStart + doorWidth && row >= height - doorHeight) {
                        if (row === height - doorHeight + clantaRow && i === clantaPos) {
                            line += "$"; // Adăugăm clanța ca simbol $
                        } else {
                            line += "|"; // Ușa plină cu linii verticale
                        }
                    } else {
                        line += "*";
                    }
                }
                console.log(line);
            } else {
                // Rând obișnuit
                console.log(" ".repeat(spaces) + "*".repeat(currentWidth));
            }
 
            currentWidth += 2;
        }
 
        if (level % 2 === 0) {
            currentWidth += 4;
        } else {
            currentWidth += 2;
        }
    }
}
 
function calculateTotalWidth(levels) {
    let width = 1;
    for (let level = 1; level <= levels; level++) {
        let height = level + 2;
        for (let row = 0; row < height; row++) {
            width += 2;
        }
        if (level % 2 === 0) {
            width += 4;
        }
    }
    return width;
}
 
sastantua(6); // Modifică numărul nivelurilor aici