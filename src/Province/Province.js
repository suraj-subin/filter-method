import React, { useState } from "react";
import { provinceData } from "./provinceData";
import { municipalitiesData } from "../Data/MunicipalitiesData";
import { districtsData } from "../Data/DistrictsData";

const Province = () => {
  const [filterDistrict, setFilterDistrict] = useState([]);
  const [filterMunicipalities, setFilterMunicipalities] = useState([]);
  // console.log(filterMunicipalities);

  const handleChangeProvince = (e) => {
    const selectProvince = e.target.value;

    const filterDistrict = districtsData.filter(
      (district) => district.province_id.toString() === selectProvince
    );

    setFilterDistrict(filterDistrict);
  };

  const handleChangeDistrict = (e) => {
    const selectDistrict = e.target.value;

    const filterMunicipalities = municipalitiesData.filter(
      (municipalities) =>
        municipalities.district_id.toString() === selectDistrict
    );

    setFilterMunicipalities(filterMunicipalities);
  };
  return (
    <>
      <form
        style={{
          width: "600px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <select name="province" id="province" onChange={handleChangeProvince}>
          <option>--Select Province--</option>
          {provinceData.map((info) => (
            <option key={info.id} value={info.id}>
              {info.name}
            </option>
          ))}
        </select>

        <select name="district" id="district" onChange={handleChangeDistrict}>
          <option>--Select District--</option>
          {filterDistrict.map((list) => (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
        </select>

        <select name="municipalities" id="municipalities">
          <option>--Select Municipalities--</option>
          {filterMunicipalities.map((pre, index) => (
            <option key={index} value={pre.district_id}>
              {pre.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Province;
