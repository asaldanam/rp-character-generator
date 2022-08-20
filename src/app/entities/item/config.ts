import { GearItem } from "./types";

export const GEAR_ITEM_ATTRIBUTES = {
  vit: 'attr_vitality',
  pot: 'attr_potency',
  ten: 'attr_tenacity',
  pre: 'attr_precision',
  ini: 'attr_initiative',
  pie: 'attr_piety',
};

export const GEAR_ITEM_ATTRIBUTES_REVERSED = Object.entries(GEAR_ITEM_ATTRIBUTES).reduce((attrs, [sort, large]) => ({ ...attrs, [large]: sort}), {})

export const GEAR_ITEM_ATTRIBUTE_VALUE_MULTIPLIER = 0.1

export const GEAR_ITEM_STATS_BY_QUALITY = [
  [],
  [24],
  [24, 12],
  [24, 12, 6]
]

export const GEAR_ITEM_COLOR_BY_QUALITY = ['white', 'limegreen', 'dodgerblue', 'yellow', 'orange'];

export const GEAR_ITEM_NAME_BY_SLOT_TABLE: {
  [Slot in GearItem['slot']]: { [lang: string]: string }
} = {
  boots: {
    es: 'botas'
  },
  chest: {
    es: 'pechera'
  },
  head: {
    es: 'cubrecabezas'
  },
  legs: {
    es: 'pantalones'
  },
  mainhand: {
    es: 'arma principal'
  },
  offhand: {
    es: 'arma secundaria'
  }
}

export const GEAR_ITEM_NAME_BY_STATS_TABLE: {
  [key: string]: {
    main: { [lang: string]: string },
    sec: { [lang: string]: string },
    alt: { [lang: string]: string },
  }
} = {
  attr_vitality: {
    main: {
      es: 'firme',
    },
    sec: {
      es: 'del luchador',
    },
    alt: {
      es: 'vigoroso',
    }
  },
  attr_potency: {
    main: {
      es: 'potente',
    },
    sec: {
      es: 'del beligerante',
    },
    alt: {
      es: 'poderoso',
    }
  },
  attr_tenacity: {
    main: {
      es: 'resistente',
    },
    sec: {
      es: 'del defensor',
    },
    alt: {
      es: 'recio',
    }
  },
  attr_precision: {
    main: {
      es: 'de precisión',
    },
    sec: {
      es: 'del asesino',
    },
    alt: {
      es: 'certero',
    }
  },
  attr_initiative: {
    main: {
      es: 'veloz',
    },
    sec: {
      es: 'del asaltante',
    },
    alt: {
      es: 'raudo',
    }
  },
  attr_piety: {
    main: {
      es: 'de piedad',
    },
    sec: {
      es: 'del sanador',
    },
    alt: {
      es: 'compasivo',
    }
  },
}

export const GEAR_ITEM_SLOT_SUBTYPES: {
  [key: string]: {
    slot: GearItem['slot'],
    text: {
      es: string,
    }
  }
} = {
  sword: {
    slot: 'mainhand',
    text: {
      es: 'espada',
    }
  },
  staff: {
    slot: 'mainhand',
    text: {
      es: 'bastón',
    }
  },
  shield: {
    slot: 'offhand',
    text: {
      es: 'escudo',
    }
  },
  focus: {
    slot: 'offhand',
    text: {
      es: 'foco',
    }
  },
}
