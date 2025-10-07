import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import i18next from "i18next";
import { Box, Fade } from "@mui/material";

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "uz", name: "O‘zbek" },
];

const SelectLan = () => {
  const [lang, setLang] = React.useState(i18next.language || "en");

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    i18next.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  React.useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== lang) {
      setLang(savedLang);
      i18next.changeLanguage(savedLang);
    }
  }, []);

  return (
    <FormControl
      size="small"
      aria-label="Language selector"
      sx={{
        m: 1,
        minWidth: 50,
        backgroundColor: "#000",
        borderRadius: "6px",
        border: "1px solid #666",
        overflow: "hidden",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& .MuiSelect-select": {
          padding: "6px 8px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
    >
      <InputLabel id="language-select-label" sx={{ display: "none" }}>
        Select Language
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        aria-label="Select language"
        value={lang}
        onChange={handleChange}
        renderValue={() => (
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            aria-hidden="true"
          >
            <img src="/globe.svg" alt="Language" width={18} height={18} />
          </Box>
        )}
        MenuProps={{
          disablePortal: true,
          TransitionComponent: Fade, 
          PaperProps: {
            sx: {
              mt: 0.5,
              backgroundColor: "#111",
              color: "#fff",
              borderRadius: "6px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              animation: "fadeIn 0.2s ease-in-out",
              "@keyframes fadeIn": {
                from: { opacity: 0, transform: "translateY(-5px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            },
          },
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
        }}
        sx={{
          color: "#fff",
          "& .MuiSvgIcon-root": { color: "#fff" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        {languages.map((item) => (
          <MenuItem
            key={item.code}
            value={item.code}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "14px",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLan;
