const ArraySearch = (array, keyword) => {
  console.log("am intrat");
  const searchTerm = keyword.toLowerCase();
  return array.filter((value) => {
    // console.log("am intrat value:", value);
    return (
      value.name.toLowerCase().match(new RegExp(searchTerm, "g")) ||
      value.preferences.filter(item => item.toLowerCase().match(new RegExp(searchTerm, "g"))).length > 0
      // value.preferences.toLowerCase().includes(new RegExp(searchTerm, "g"))
      
    );
  });
};

export default ArraySearch;