function remove(key: string) {
  console.log(key);
  localStorage.removeItem(key);
}

export default remove;
