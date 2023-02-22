export default function getHealth(character) {
  if (!character) {
    return null;
  }

  if (character.health >= 50) {
    return 'healthy';
  } if (character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
