import { ChangeEvent } from "react";
import { SearchInputProps } from "../MainWeatherData.types";
import {
  SearchButton,
  SearchInputButtonContainer,
  StyledSearchInput,
} from "../../styles/MainWeatherData.styled";

const SearchInput = ({
  city,
  setCity,
  fetchWeatherData,
  fetchForecastData,
}: SearchInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await fetchWeatherData();
      await fetchForecastData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SearchInputButtonContainer>
      <StyledSearchInput
        type="text"
        placeholder="Írd be a város nevét..."
        value={city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
      <SearchButton
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleSubmit(e)
        }
      >
        🔍 KERESÉS
      </SearchButton>
    </SearchInputButtonContainer>
  );
};

export default SearchInput;
