import events2023_2024 from './2023-2024.js';
import events2022_2023 from './2022-2023.js';
import events2025_2026 from './2025-2026.js';

// it's important for this to be more-recent-years=first
const academicYearEventsMap = new Map();
academicYearEventsMap.set('currentAcademicYear', '2025-2026');
academicYearEventsMap.set('2025-2026', events2025_2026);
academicYearEventsMap.set('2023-2024', events2023_2024);
academicYearEventsMap.set('2022-2023', events2022_2023);

export default academicYearEventsMap;