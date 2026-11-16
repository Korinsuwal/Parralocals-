/**
 * PARRALOCALS Unified Workout & Video Course Store
 * Default: 8-Minute Futsal Timer
 * Nike Run Club (NRC) Athletic Architecture
 */

const DEFAULT_WORKOUTS = [
  // --- ⚽ FUTSAL (Default: 8 Minute Timer) ---
  {
    id: "f_8min",
    name: "⚽ 8 MINUTE FUTSAL",
    category: "futsal",
    coach: "Marco Silva",
    coachRole: "FIFA Futsal Coach",
    coachInitials: "MS",
    difficulty: "All Levels",
    duration: "18 Min",
    calories: "220 kcal",
    rating: "5.0 ★ (1.2k)",
    badge: "FUTSAL DRILL",
    prep: 10,
    work: 480, // 8 minutes
    rest: 60,  // 1 minute
    rounds: 2,
    soundTheme: "whistle",
    equipment: "Futsal Ball, Court / Turf",
    description: "Official 8-minute high-tempo futsal half with 1-minute tactical breather.",
    accentGradient: "linear-gradient(135deg, #0575E6 0%, #00F2FE 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.28) 0%, rgba(5, 20, 45, 0.95) 75%)",
    createdAt: Date.now() - 1000000
  },
  {
    id: "f_sprint",
    name: "⚽ SPRINT BURST 30/30",
    category: "futsal",
    coach: "Carlos Mendez",
    coachRole: "Conditioning Specialist",
    coachInitials: "CM",
    difficulty: "All Levels",
    duration: "8 Min",
    calories: "280 kcal",
    rating: "4.8 ★ (710)",
    badge: "FAST TRACK",
    prep: 5,
    work: 30,
    rest: 30,
    rounds: 8,
    soundTheme: "whistle",
    equipment: "Cones, Running Space",
    description: "Full-speed sprint transitions and active recovery for futsal wingers.",
    accentGradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(0, 198, 255, 0.28) 0%, rgba(6, 25, 48, 0.95) 75%)",
    createdAt: Date.now() - 3000000
  },
  {
    id: "f_ot",
    name: "⚽ EXTRA TIME 5M",
    category: "futsal",
    coach: "Leo Torres",
    coachRole: "Skills Director",
    coachInitials: "LT",
    difficulty: "Advanced Pro",
    duration: "12 Min",
    calories: "250 kcal",
    rating: "4.9 ★ (820)",
    badge: "OVERTIME",
    prep: 10,
    work: 300,
    rest: 60,
    rounds: 2,
    soundTheme: "whistle",
    equipment: "Full Court / Indoor Pitch",
    description: "Two 5-minute overtime periods with 1-minute break.",
    accentGradient: "linear-gradient(135deg, #0575E6 0%, #00F2FE 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.28) 0%, rgba(5, 20, 45, 0.95) 75%)",
    createdAt: Date.now() - 4000000
  },

  // --- 🥊 BOXING ---
  {
    id: "b_12",
    name: "🥊 CHAMPIONSHIP 12R",
    category: "boxing",
    coach: "Malik 'Hammer' Ross",
    coachRole: "WBC World Title Coach",
    coachInitials: "MR",
    difficulty: "Elite Athlete",
    duration: "48 Min",
    calories: "780 kcal",
    rating: "5.0 ★ (2.6k)",
    badge: "CHAMPIONSHIP",
    prep: 15,
    work: 180,
    rest: 60,
    rounds: 12,
    soundTheme: "boxing",
    equipment: "Gloves, Handwraps",
    description: "Pro 12-round boxing championship pacing with authentic ringside bell.",
    accentGradient: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(255, 65, 108, 0.28) 0%, rgba(45, 10, 15, 0.95) 75%)",
    createdAt: Date.now() - 5000000
  },
  {
    id: "b_5",
    name: "🥊 PRO SPARRING 5R",
    category: "boxing",
    coach: "Ray Mercer",
    coachRole: "Olympic Gold Coach",
    coachInitials: "RM",
    difficulty: "Advanced Pro",
    duration: "20 Min",
    calories: "410 kcal",
    rating: "4.9 ★ (1.1k)",
    badge: "PRO SERIES",
    prep: 15,
    work: 180,
    rest: 60,
    rounds: 5,
    soundTheme: "boxing",
    equipment: "16oz Gloves, Headgear",
    description: "Classic 5-round sparring simulation: 3-minute hard rounds.",
    accentGradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(248, 87, 166, 0.28) 0%, rgba(40, 10, 25, 0.95) 75%)",
    createdAt: Date.now() - 6000000
  },
  {
    id: "b_bag",
    name: "🥊 HEAVY BAG 2M",
    category: "boxing",
    coach: "Elena Vance",
    coachRole: "Combat Conditioning",
    coachInitials: "EV",
    difficulty: "Intermediate",
    duration: "20 Min",
    calories: "390 kcal",
    rating: "4.9 ★ (880)",
    badge: "BAG WORK",
    prep: 10,
    work: 120,
    rest: 30,
    rounds: 8,
    soundTheme: "boxing",
    equipment: "Heavy Bag, Boxing Gloves",
    description: "Fast 2-minute heavy bag rounds with quick 30s recovery.",
    accentGradient: "linear-gradient(135deg, #FF8008 0%, #FFC837 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(255, 128, 8, 0.28) 0%, rgba(45, 20, 5, 0.95) 75%)",
    createdAt: Date.now() - 7000000
  },
  {
    id: "b_tabata",
    name: "🥊 FIGHT TABATA 20/10",
    category: "boxing",
    coach: "Malik Ross",
    coachRole: "WBC Trainer",
    coachInitials: "MR",
    difficulty: "Advanced Pro",
    duration: "4 Min",
    calories: "190 kcal",
    rating: "5.0 ★ (1.5k)",
    badge: "BURNOUT",
    prep: 10,
    work: 20,
    rest: 10,
    rounds: 8,
    soundTheme: "boxing",
    equipment: "Handwraps / Gloves",
    description: "Maximum punch output burpees and straight punches.",
    accentGradient: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(255, 65, 108, 0.28) 0%, rgba(45, 10, 15, 0.95) 75%)",
    createdAt: Date.now() - 8000000
  },

  // --- ⚡ HIIT ---
  {
    id: "h_tabata",
    name: "⚡ TABATA CLASSIC 20/10",
    category: "hiit",
    coach: "Dr. Kenji Sato",
    coachRole: "Exercise Physiologist",
    coachInitials: "KS",
    difficulty: "All Levels",
    duration: "4 Min",
    calories: "180 kcal",
    rating: "4.9 ★ (3.4k)",
    badge: "GOLD STANDARD",
    prep: 10,
    work: 20,
    rest: 10,
    rounds: 8,
    soundTheme: "beep",
    equipment: "Mat, Bodyweight",
    description: "The clinically proven 4-minute Dr. Izumi Tabata protocol.",
    accentGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(56, 239, 125, 0.28) 0%, rgba(5, 30, 18, 0.95) 75%)",
    createdAt: Date.now() - 9000000
  },
  {
    id: "h_45_15",
    name: "⚡ HIGH-VOLTAGE 45/15",
    category: "hiit",
    coach: "Elena Vance",
    coachRole: "Nike Master Trainer",
    coachInitials: "EV",
    difficulty: "Intermediate",
    duration: "6 Min",
    calories: "260 kcal",
    rating: "4.8 ★ (1.9k)",
    badge: "FAT BURN",
    prep: 10,
    work: 45,
    rest: 15,
    rounds: 6,
    soundTheme: "beep",
    equipment: "Bodyweight",
    description: "45 seconds maximum sustained power, 15 seconds fast transition.",
    accentGradient: "linear-gradient(135deg, #8A2387 0%, #E94057 50%, #F27121 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(233, 64, 87, 0.28) 0%, rgba(35, 10, 25, 0.95) 75%)",
    createdAt: Date.now() - 10000000
  },
  {
    id: "h_30_30",
    name: "⚡ POWER CARDIO 30/30",
    category: "hiit",
    coach: "Coach Parra",
    coachRole: "High-Performance Director",
    coachInitials: "CP",
    difficulty: "Advanced Pro",
    duration: "10 Min",
    calories: "320 kcal",
    rating: "5.0 ★ (1.4k)",
    badge: "AEROBIC PEAK",
    prep: 5,
    work: 30,
    rest: 30,
    rounds: 10,
    soundTheme: "buzzer",
    equipment: "Running Space",
    description: "Equal 1:1 work-to-rest ratio for repeat sprint ability.",
    accentGradient: "linear-gradient(135deg, #4E54C8 0%, #8F94FB 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(143, 148, 251, 0.28) 0%, rgba(15, 18, 48, 0.95) 75%)",
    createdAt: Date.now() - 11000000
  },
  {
    id: "h_60_20",
    name: "⚡ MAX BURN 60/20",
    category: "hiit",
    coach: "Elena Vance",
    coachRole: "Master Trainer",
    coachInitials: "EV",
    difficulty: "Advanced Pro",
    duration: "7 Min",
    calories: "290 kcal",
    rating: "4.9 ★ (990)",
    badge: "ENDURANCE",
    prep: 10,
    work: 60,
    rest: 20,
    rounds: 5,
    soundTheme: "gong",
    equipment: "Mat",
    description: "Long sustained 60s aerobic sprints followed by sharp 20s recovery.",
    accentGradient: "linear-gradient(135deg, #8A2387 0%, #E94057 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(233, 64, 87, 0.28) 0%, rgba(35, 10, 25, 0.95) 75%)",
    createdAt: Date.now() - 12000000
  },

  // --- ⭐ CUSTOM ---
  {
    id: "c_custom",
    name: "⭐ CUSTOM ROUTINE",
    category: "custom",
    coach: "Head Coach",
    coachRole: "Parralocals Trainer",
    coachInitials: "HC",
    difficulty: "Custom",
    duration: "10 Min",
    calories: "300 kcal",
    rating: "5.0 ★",
    badge: "MY ROUTINE",
    prep: 10,
    work: 45,
    rest: 15,
    rounds: 10,
    soundTheme: "boxing",
    equipment: "Any",
    description: "Personalized interval training routine.",
    accentGradient: "linear-gradient(135deg, #00F2FE 0%, #0575E6 100%)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.28) 0%, rgba(5, 20, 45, 0.95) 75%)",
    createdAt: Date.now()
  }
];

const STORAGE_KEY_WORKOUTS = "parralocals_workouts_v6";

class WorkoutStore {
  constructor() {
    this._init();
  }

  _init() {
    const existing = localStorage.getItem(STORAGE_KEY_WORKOUTS);
    if (!existing) {
      localStorage.setItem(STORAGE_KEY_WORKOUTS, JSON.stringify(DEFAULT_WORKOUTS));
    }
  }

  async getWorkouts(category = "ALL") {
    try {
      const data = localStorage.getItem(STORAGE_KEY_WORKOUTS);
      const list = data ? JSON.parse(data) : DEFAULT_WORKOUTS;
      if (!category || category === "ALL") return list;
      return list.filter(w => (w.category || "custom").toUpperCase() === category.toUpperCase());
    } catch (e) {
      return DEFAULT_WORKOUTS;
    }
  }

  async saveWorkout(workout) {
    const list = await this.getWorkouts("ALL");
    if (!workout.id) {
      workout.id = "w_" + Date.now();
      workout.createdAt = Date.now();
      list.unshift(workout);
    } else {
      const idx = list.findIndex(w => w.id === workout.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...workout, updatedAt: Date.now() };
      } else {
        list.unshift(workout);
      }
    }
    localStorage.setItem(STORAGE_KEY_WORKOUTS, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('parralocals:workouts-updated'));
    return workout;
  }

  async deleteWorkout(id) {
    let list = await this.getWorkouts("ALL");
    list = list.filter(w => w.id !== id);
    localStorage.setItem(STORAGE_KEY_WORKOUTS, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('parralocals:workouts-updated'));
    return true;
  }

  async resetToDefaults() {
    localStorage.setItem(STORAGE_KEY_WORKOUTS, JSON.stringify(DEFAULT_WORKOUTS));
    window.dispatchEvent(new CustomEvent('parralocals:workouts-updated'));
    return DEFAULT_WORKOUTS;
  }
}

window.parralocalsStore = new WorkoutStore();
