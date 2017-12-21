const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  this.ul.innerHTML = "";
  this.ul.appendChild(this.createListItem("name", country.name));
  this.ul.appendChild(this.createListItem("population", country.population));
  this.ul.appendChild(this.createListItem("region", country.region));

}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
