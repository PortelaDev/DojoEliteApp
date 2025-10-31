import AsyncStorage from '@react-native-async-storage/async-storage';

const STUDENTS_KEY = '@dojoelite:students';

export async function getStudents() {
  try {
    const raw = await AsyncStorage.getItem(STUDENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function saveStudent(student) {
  try {
    const list = await getStudents();
    list.push(student);
    await AsyncStorage.setItem(STUDENTS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }
}