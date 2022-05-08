import execs2021_2022 from './2021-2022';
import execs2020_2021 from './2020-2021';
import execs2019_2020 from './2019-2020';

// it's important for this to be more-recent-years=first
const academicYearExecsMap = new Map();
academicYearExecsMap.set('currentAcademicYear', '2021-2022');
academicYearExecsMap.set('2021-2022', execs2021_2022);
academicYearExecsMap.set('2020-2021', execs2020_2021);
academicYearExecsMap.set('2019-2020', execs2019_2020);

export default academicYearExecsMap;
