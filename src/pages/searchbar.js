import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="搜索" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '川渝石窟摩崖题刻中的古代瘟疫资料辑考', year: 1994 },
  { label: '川渝风物图', year: 1972 },
  { label: '民国时期川渝巡回文库发展探析', year: 1974 },
  { label: '川渝地区汉晋墓出土“抚耳俑”考辨', year: 2008 },
  { label: '民国时期川渝抗战插图研究', year: 1957 },
  { label: "川渝地区汉晋墓出土“抚耳俑”考辨", year: 1993 },
  { label: '川渝传统民居地理研究', year: 1994 },
  {
    label: '川渝蓉各商会发起抵制日货',
    year: 2003,
  },
  { label: '戏台木雕艺术探析 ——以川渝地区会馆、祠堂戏台场域空间为例', year: 1966 },
  { label: '川渝地区宗祠剧场调查研究', year: 1999 },
  {
    label: '川渝地区汉代胡人吹箫俑的研究',
    year: 2001,
  },
];