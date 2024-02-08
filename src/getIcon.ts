import i01d from "../src/images/icons/01d.svg"
import i01n from "../src/images/icons/01n.svg"
import i02d from "../src/images/icons/02d.svg"
import i02n from "../src/images/icons/02n.svg"
import i03d from "../src/images/icons/03d.svg"
import i03n from "../src/images/icons/03n.svg"
import i04d from "../src/images/icons/04d.svg"
import i04n from "../src/images/icons/04n.svg"
import i09d from "../src/images/icons/09d.svg"
import i09n from "../src/images/icons/09n.svg"
import i10d from "../src/images/icons/10d.svg"
import i10n from "../src/images/icons/10n.svg"
import i11d from "../src/images/icons/11d.svg"
import i11n from "../src/images/icons/11n.svg"
import i13d from "../src/images/icons/13d.svg"
import i13n from "../src/images/icons/13n.svg"
import i50d from "../src/images/icons/50d.svg"
import i50n from "../src/images/icons/50n.svg"

export default function (weatherIconId:string | undefined): string  {
    switch(weatherIconId) {
        case "01d": return i01d
        case "01n": return i01n
        case "02d": return i02d
        case "02n": return i02n
        case "03d": return i03d
        case "03n": return i03n
        case "04d": return i04d
        case "04n": return i04n
        case "09d": return i09d
        case "09n": return i09n
        case "10d": return i10d
        case "10n": return i10n
        case "11d": return i11d
        case "11n": return i11n
        case "13d": return i13d
        case "13n": return i13n
        case "50d": return i50d
        case "50n": return i50n
        default: return i50d    
    }
}