const ArraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();
  return array.filter((value) => {
    return (
      value.name.toLowerCase().match(new RegExp(searchTerm, "g")) ||
      value.preferences.filter(item => item.toLowerCase().match(new RegExp(searchTerm, "g"))).length > 0     
    );
  });
};

export default ArraySearch;