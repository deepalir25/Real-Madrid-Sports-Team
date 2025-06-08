const matchForm = document.getElementById('matchForm');
const matchTable = document.getElementById('matchTable');
let matches = [];

// Create or Update Match
matchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const opponent = document.getElementById('opponent').value;
  const result = document.getElementById('result').value;

  const existingMatchIndex = matches.findIndex(match => match.editing);
  if (existingMatchIndex >= 0) {
    // Update existing match
    matches[existingMatchIndex] = { date, opponent, result, editing: false };
  } else {
    // Add new match
    matches.push({ date, opponent, result });
  }

  matchForm.reset();
  renderMatches();
});

// Render Matches
function renderMatches() {
  matchTable.innerHTML = '';
  matches.forEach((match, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${match.date}</td>
      <td>${match.opponent}</td>
      <td>${match.result}</td>
      <td>
        <button class="btn btn-sm btn-primary btn-edit" onclick="editMatch(${index})">Edit</button>
        <button class="btn btn-sm btn-danger btn-delete" onclick="deleteMatch(${index})">Delete</button>
      </td>
    `;
    matchTable.appendChild(row);
  });
}

// Edit Match
function editMatch(index) {
  const match = matches[index];
  document.getElementById('date').value = match.date;
  document.getElementById('opponent').value = match.opponent;
  document.getElementById('result').value = match.result;
  matches[index].editing = true;
}

// Delete Match
function deleteMatch(index) {
  matches.splice(index, 1);
  renderMatches();
}