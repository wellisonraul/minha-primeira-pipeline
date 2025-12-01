
function isValidUserName(name) {
  if (typeof name !== 'string') {
    return false;
  }
  // Remove espaços em branco antes e depois
  const trimmedName = name.trim(); 
  
  // O nome deve ter entre 3 e 50 caracteres (exemplo de regra)
  return trimmedName.length >= 3 && trimmedName.length <= 50;
}

module.exports = { isValidUserName };