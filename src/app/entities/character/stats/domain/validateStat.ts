import { Stat, StatValue } from "../types";

/** Valida una estadística */
export function validateStat(stat: Stat, value: StatValue) {
  // Se declara el array de reglas que validan las estadísticas
  const rules = [
    {
      name: 'threshold',
      descripcion: 'Debe estar comprendida entre 1 y 30',
      shouldBeValid: value >= 1 && value <= 30,
    },
  ];

  // Se comprueba que todas las reglas son válidas. Si no cumple alguna, se retorna error
  const error = rules.reduce((_, rule) => {
    if (rule.shouldBeValid) return '';
    return `La estadística [${stat}] no satisface la regla [${rule.name}]: ${rule.descripcion}`;
  }, '');

  return {
    isValid: !error,
    error: error,
  };
}