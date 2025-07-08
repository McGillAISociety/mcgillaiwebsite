import execs2025_2026 from './2025-2026.js';
import execs2024_2025 from './2024-2025.js';
import execs2023_2024 from './2023-2024.js';
import execs2022_2023 from './2022-2023.js';
import execs2021_2022 from './2021-2022.js';
import execs2020_2021 from './2020-2021.js';
import execs2019_2020 from './2019-2020.js';

// it's important for this to be more-recent-years=first
const academicYearExecsMap = new Map();
academicYearExecsMap.set('currentAcademicYear', '2025-2026');
academicYearExecsMap.set('2025-2026', execs2025_2026);
academicYearExecsMap.set('2024-2025', execs2024_2025);
academicYearExecsMap.set('2023-2024', execs2023_2024);
academicYearExecsMap.set('2022-2023', execs2022_2023);
academicYearExecsMap.set('2021-2022', execs2021_2022);
academicYearExecsMap.set('2020-2021', execs2020_2021);
academicYearExecsMap.set('2019-2020', execs2019_2020);

export default academicYearExecsMap;
