const chords = [
    { name: 'C', diagram: ['x', '3', '2', '0', '1', '0'] },
    { name: 'D', diagram: ['x', 'x', '0', '2', '3', '2'] },
    { name: 'E', diagram: ['0', '2', '2', '1', '0', '0'] },
    { name: 'G', diagram: ['3', '2', '0', '0', '3', '3'] },
    { name: 'A', diagram: ['x', '0', '2', '2', '2', '0'] },
    { name: 'F', diagram: ['1', '3', '3', '2', '1', '1'] },
    { name: 'Bm', diagram: ['x', '2', '4', '4', '3', '2'] },
    { name: 'Am', diagram: ['x', '0', '2', '2', '1', '0'] },
    { name: 'Cmaj7', diagram: ['x', '3', '2', '0', '0', '0'] },
    { name: 'D7', diagram: ['x', 'x', '0', '2', '1', '2'] },
    { name: 'G7', diagram: ['3', '2', '0', '0', '0', '1'] },
    { name: 'A7', diagram: ['x', '0', '2', '0', '2', '0'] },
    { name: 'E7', diagram: ['0', '2', '0', '1', '0', '0'] },
    { name: 'Fmaj7', diagram: ['1', '3', '2', '2', '1', '0'] },
    { name: 'F#m', diagram: ['2', '4', '4', '2', '2', '2'] },
    { name: 'B', diagram: ['x', '2', '4', '4', '4', '2'] },
    { name: 'C7', diagram: ['x', '3', '2', '3', '1', '0'] },
    { name: 'Dmaj7', diagram: ['x', 'x', '0', '2', '2', '2'] },
    { name: 'Gmaj7', diagram: ['3', '2', '0', '0', '0', '2'] },
    { name: 'Emaj7', diagram: ['0', '2', '1', '1', '0', '0'] },
    { name: 'Amaj7', diagram: ['x', '0', '2', '1', '2', '0'] },
    { name: 'Em', diagram: ['0', '2', '2', '0', '0', '0'] },
    { name: 'Ddim', diagram: ['x', 'x', '0', '1', '2', '0'] },
    { name: 'Gdim', diagram: ['3', '4', '0', '0', '0', '1'] },
    { name: 'C#', diagram: ['x', '4', '6', '6', '6', '4'] },
    { name: 'Ab', diagram: ['4', '6', '6', '5', '4', '4'] },
    { name: 'Db', diagram: ['x', '4', '6', '6', '6', '4'] },
    { name: 'Eb', diagram: ['x', '6', '8', '8', '8', '6'] },
    { name: 'F#', diagram: ['2', '4', '4', '3', '2', '2'] },
    { name: 'A#', diagram: ['x', '1', '3', '3', '3', '1'] },
    { name: 'Bbm', diagram: ['x', '1', '3', '3', '2', '1'] },
    { name: 'Gbm', diagram: ['2', '4', '4', '2', '2', '2'] },
    { name: 'C#m', diagram: ['x', '4', '6', '6', '5', '4'] },
    { name: 'F#7', diagram: ['2', '4', '2', '3', '2', '2'] },
    { name: 'Bm7', diagram: ['x', '2', '4', '2', '3', '2'] },
    { name: 'Cm', diagram: ['x', '3', '5', '5', '4', '3'] },
    { name: 'Dmaj7', diagram: ['x', 'x', '0', '2', '2', '2'] },
    { name: 'Ebm', diagram: ['x', '6', '8', '8', '7', '6'] },
];


document.getElementById('generate-chord').addEventListener('click', generateChord);

function generateChord() {
    const randomChord = chords[Math.floor(Math.random() * chords.length)];
    document.getElementById('chord-name').textContent = randomChord.name;

    const diagramContainer = document.getElementById('chord-diagram');
    diagramContainer.innerHTML = '';  // Clear previous diagram


    randomChord.diagram.forEach(note => {
        const noteSpan = document.createElement('span');
        noteSpan.textContent = note;
        diagramContainer.appendChild(noteSpan);
    });
}
