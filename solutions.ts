const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
};

type ProcessInputValue = string | number | boolean;
const processInput = (value: ProcessInputValue): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
};

type FormatCoordinateValue = readonly [number, number, string];
const formatCoordinate = ([
  latitude,
  longitude,
  locationName,
]: FormatCoordinateValue): string => {
  const formattedValue = `Location: ${locationName.trim()} (${latitude}, ${longitude})`;
  return formattedValue;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const newConCatArray = arrays.flat();
  return newConCatArray;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourse = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return popularCourse;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const extractedValues = items.map((item) => item[key]);
  return extractedValues;
};
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  const delay: Promise<void> = new Promise<void>((resolve) =>
    setTimeout(resolve, 1000),
  );
  await delay;
  return "Access Granted";
};
