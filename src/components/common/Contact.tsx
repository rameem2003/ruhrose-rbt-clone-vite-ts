import Container from "./Container";
import contact from "../../assets/Contact.png";
import ComponentReveal from "./ComponentReveal";
import { useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    let form = formRef.current;
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1870bb5e-b6c6-4374-bba8-13b966792d8a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    console.log(data.message);

    setLoading(false);

    if (data.success) {
      toast.success("Form submitted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      toast.error("Form submission failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    form?.reset();
  };

  return (
    <section id="contact" className=" bg-white py-10">
      <Container>
        <div className=" flex items-start justify-between flex-wrap md:flex-nowrap gap-5">
          <div className=" w-full md:w-1/2">
            <ComponentReveal x={-50} delay={0.5}>
              <form ref={formRef} className="w-full" onSubmit={onSubmit}>
                <h3 className=" mb-8 font-title-two text-secondary text-4xl font-bold">
                  Get in touch
                </h3>

                <div className=" mb-5">
                  <input
                    required
                    className=" w-full text-secondary font-medium text-lg p-4 border-b border-secondary placeholder:text-secondary outline-secondary"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className=" mb-5">
                  <input
                    required
                    className=" w-full text-secondary font-medium text-lg p-4 border-b border-secondary placeholder:text-secondary outline-secondary"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className=" mb-5">
                  <select
                    required
                    className=" w-full text-secondary font-medium text-lg p-4 border-b border-secondary placeholder:text-secondary outline-secondary"
                    name="country"
                    id="country"
                  >
                    <option value="">Select Country</option>
                    <option value="(+93) Afghanistan">Afghanistan (+93)</option>
                    <option value="(+355) Albania">Albania (+355)</option>
                    <option value="(+213) Algeria">Algeria (+213)</option>
                    <option value="(+1684) American Samoa">
                      American Samoa (+1684)
                    </option>
                    <option value="(+376) Andorra">Andorra (+376)</option>
                    <option value="(+244) Angola">Angola (+244)</option>
                    <option value="(+1264) Anguilla">Anguilla (+1264)</option>
                    <option value="(+672) Antarctica">Antarctica (+672)</option>
                    <option value="(+1268) Antigua and Barbuda">
                      Antigua and Barbuda (+1268)
                    </option>
                    <option value="(+54) Argentina">Argentina (+54)</option>
                    <option value="(+374) Armenia">Armenia (+374)</option>
                    <option value="(+297) Aruba">Aruba (+297)</option>
                    <option value="(+61) Australia">Australia (+61)</option>
                    <option value="(+43) Austria">Austria (+43)</option>
                    <option value="(+994) Azerbaijan">Azerbaijan (+994)</option>
                    <option value="(+1242) Bahamas">Bahamas (+1242)</option>
                    <option value="(+973) Bahrain">Bahrain (+973)</option>
                    <option value="(+880) Bangladesh">Bangladesh (+880)</option>
                    <option value="(+1246) Barbados">Barbados (+1246)</option>
                    <option value="(+375) Belarus">Belarus (+375)</option>
                    <option value="(+32) Belgium">Belgium (+32)</option>
                    <option value="(+501) Belize">Belize (+501)</option>
                    <option value="(+229) Benin">Benin (+229)</option>
                    <option value="(+1441) Bermuda">Bermuda (+1441)</option>
                    <option value="(+975) Bhutan">Bhutan (+975)</option>
                    <option value="(+591) Bolivia">Bolivia (+591)</option>
                    <option value="(+387) Bosnia and Herzegovina">
                      Bosnia and Herzegovina (+387)
                    </option>
                    <option value="(+267) Botswana">Botswana (+267)</option>
                    <option value="(+55) Brazil">Brazil (+55)</option>
                    <option value="(+246) British Indian Ocean Territory">
                      British Indian Ocean Territory (+246)
                    </option>
                    <option value="(+1284) British Virgin Islands">
                      British Virgin Islands (+1284)
                    </option>
                    <option value="(+673) Brunei">Brunei (+673)</option>
                    <option value="(+359) Bulgaria">Bulgaria (+359)</option>
                    <option value="(+226) Burkina Faso">
                      Burkina Faso (+226)
                    </option>
                    <option value="(+257) Burundi">Burundi (+257)</option>
                    <option value="(+855) Cambodia">Cambodia (+855)</option>
                    <option value="(+237) Cameroon">Cameroon (+237)</option>
                    <option value="(+1) Canada">Canada (+1)</option>
                    <option value="(+238) Cape Verde">Cape Verde (+238)</option>
                    <option value="(+1345) Cayman Islands">
                      Cayman Islands (+1345)
                    </option>
                    <option value="(+236) Central African Republic">
                      Central African Republic (+236)
                    </option>
                    <option value="(+235) Chad">Chad (+235)</option>
                    <option value="(+56) Chile">Chile (+56)</option>
                    <option value="(+86) China">China (+86)</option>
                    <option value="(+57) Colombia">Colombia (+57)</option>
                    <option value="(+269) Comoros">Comoros (+269)</option>
                    <option value="(+242) Congo - Brazzaville">
                      Congo - Brazzaville (+242)
                    </option>
                    <option value="(+243) Congo - Kinshasa">
                      Congo - Kinshasa (+243)
                    </option>
                    <option value="(+682) Cook Islands">
                      Cook Islands (+682)
                    </option>
                    <option value="(+506) Costa Rica">Costa Rica (+506)</option>
                    <option value="(+225) Côte d’Ivoire">
                      Côte d’Ivoire (+225)
                    </option>
                    <option value="(+385) Croatia">Croatia (+385)</option>
                    <option value="(+53) Cuba">Cuba (+53)</option>
                    <option value="(+599) Curaçao">Curaçao (+599)</option>
                    <option value="(+357) Cyprus">Cyprus (+357)</option>
                    <option value="(+420) Czech Republic">
                      Czech Republic (+420)
                    </option>
                    <option value="(+45) Denmark">Denmark (+45)</option>
                    <option value="(+253) Djibouti">Djibouti (+253)</option>
                    <option value="(+1767) Dominica">Dominica (+1767)</option>
                    <option value="(+1809) Dominican Republic">
                      Dominican Republic (+1809)
                    </option>
                    <option value="(+593) Ecuador">Ecuador (+593)</option>
                    <option value="(+20) Egypt">Egypt (+20)</option>
                    <option value="(+503) El Salvador">
                      El Salvador (+503)
                    </option>
                    <option value="(+240) Equatorial Guinea">
                      Equatorial Guinea (+240)
                    </option>
                    <option value="(+291) Eritrea">Eritrea (+291)</option>
                    <option value="(+372) Estonia">Estonia (+372)</option>
                    <option value="(+251) Ethiopia">Ethiopia (+251)</option>
                    <option value="(+500) Falkland Islands">
                      Falkland Islands (+500)
                    </option>
                    <option value="(+298) Faroe Islands">
                      Faroe Islands (+298)
                    </option>
                    <option value="(+679) Fiji">Fiji (+679)</option>
                    <option value="(+358) Finland">Finland (+358)</option>
                    <option value="(+33) France">France (+33)</option>
                    <option value="(+594) French Guiana">
                      French Guiana (+594)
                    </option>
                    <option value="(+689) French Polynesia">
                      French Polynesia (+689)
                    </option>
                    <option value="(+241) Gabon">Gabon (+241)</option>
                    <option value="(+220) Gambia">Gambia (+220)</option>
                    <option value="(+995) Georgia">Georgia (+995)</option>
                    <option value="(+49) Germany">Germany (+49)</option>
                    <option value="(+233) Ghana">Ghana (+233)</option>
                    <option value="(+350) Gibraltar">Gibraltar (+350)</option>
                    <option value="(+30) Greece">Greece (+30)</option>
                    <option value="(+299) Greenland">Greenland (+299)</option>
                    <option value="(+1473) Grenada">Grenada (+1473)</option>
                    <option value="(+590) Guadeloupe">Guadeloupe (+590)</option>
                    <option value="(+1671) Guam">Guam (+1671)</option>
                    <option value="(+502) Guatemala">Guatemala (+502)</option>
                    <option value="(+44) Guernsey">Guernsey (+44)</option>
                    <option value="(+224) Guinea">Guinea (+224)</option>
                    <option value="(+245) Guinea-Bissau">
                      Guinea-Bissau (+245)
                    </option>
                    <option value="(+592) Guyana">Guyana (+592)</option>
                    <option value="(+509) Haiti">Haiti (+509)</option>
                    <option value="(+379) Holy See">Holy See (+379)</option>
                    <option value="(+504) Honduras">Honduras (+504)</option>
                    <option value="(+852) Hong Kong">Hong Kong (+852)</option>
                    <option value="(+36) Hungary">Hungary (+36)</option>
                    <option value="(+354) Iceland">Iceland (+354)</option>
                    <option value="(+91) India">India (+91)</option>
                    <option value="(+62) Indonesia">Indonesia (+62)</option>
                    <option value="(+98) Iran">Iran (+98)</option>
                    <option value="(+964) Iraq">Iraq (+964)</option>
                    <option value="(+353) Ireland">Ireland (+353)</option>
                    <option value="(+44) Isle of Man">Isle of Man (+44)</option>
                    <option value="(+972) Israel">Israel (+972)</option>
                    <option value="(+39) Italy">Italy (+39)</option>
                    <option value="(+1876) Jamaica">Jamaica (+1876)</option>
                    <option value="(+81) Japan">Japan (+81)</option>
                    <option value="(+44) Jersey">Jersey (+44)</option>
                    <option value="(+962) Jordan">Jordan (+962)</option>
                    <option value="(+7) Kazakhstan">Kazakhstan (+7)</option>
                    <option value="(+254) Kenya">Kenya (+254)</option>
                    <option value="(+686) Kiribati">Kiribati (+686)</option>
                    <option value="(+850) North Korea">
                      North Korea (+850)
                    </option>
                    <option value="(+82) South Korea">South Korea (+82)</option>
                    <option value="(+965) Kuwait">Kuwait (+965)</option>
                    <option value="(+996) Kyrgyzstan">Kyrgyzstan (+996)</option>
                    <option value="(+856) Laos">Laos (+856)</option>
                    <option value="(+371) Latvia">Latvia (+371)</option>
                    <option value="(+961) Lebanon">Lebanon (+961)</option>
                    <option value="(+266) Lesotho">Lesotho (+266)</option>
                    <option value="(+231) Liberia">Liberia (+231)</option>
                    <option value="(+218) Libya">Libya (+218)</option>
                    <option value="(+423) Liechtenstein">
                      Liechtenstein (+423)
                    </option>
                    <option value="(+370) Lithuania">Lithuania (+370)</option>
                    <option value="(+352) Luxembourg">Luxembourg (+352)</option>
                    <option value="(+853) Macau">Macau (+853)</option>
                    <option value="(+389) North Macedonia">
                      North Macedonia (+389)
                    </option>
                    <option value="(+261) Madagascar">Madagascar (+261)</option>
                    <option value="(+265) Malawi">Malawi (+265)</option>
                    <option value="(+60) Malaysia">Malaysia (+60)</option>
                    <option value="(+960) Maldives">Maldives (+960)</option>
                    <option value="(+223) Mali">Mali (+223)</option>
                    <option value="(+356) Malta">Malta (+356)</option>
                    <option value="(+692) Marshall Islands">
                      Marshall Islands (+692)
                    </option>
                    <option value="(+596) Martinique">Martinique (+596)</option>
                    <option value="(+222) Mauritania">Mauritania (+222)</option>
                    <option value="(+230) Mauritius">Mauritius (+230)</option>
                    <option value="(+262) Mayotte">Mayotte (+262)</option>
                    <option value="(+52) Mexico">Mexico (+52)</option>
                    <option value="(+691) Micronesia">Micronesia (+691)</option>
                    <option value="(+373) Moldova">Moldova (+373)</option>
                    <option value="(+377) Monaco">Monaco (+377)</option>
                    <option value="(+976) Mongolia">Mongolia (+976)</option>
                    <option value="(+382) Montenegro">Montenegro (+382)</option>
                    <option value="(+1664) Montserrat">
                      Montserrat (+1664)
                    </option>
                    <option value="(+212) Morocco">Morocco (+212)</option>
                    <option value="(+258) Mozambique">Mozambique (+258)</option>
                    <option value="(+95) Myanmar">Myanmar (+95)</option>
                    <option value="(+264) Namibia">Namibia (+264)</option>
                    <option value="(+674) Nauru">Nauru (+674)</option>
                    <option value="(+977) Nepal">Nepal (+977)</option>
                    <option value="(+31) Netherlands">Netherlands (+31)</option>
                    <option value="(+687) New Caledonia">
                      New Caledonia (+687)
                    </option>
                    <option value="(+64) New Zealand">New Zealand (+64)</option>
                    <option value="(+505) Nicaragua">Nicaragua (+505)</option>
                    <option value="(+227) Niger">Niger (+227)</option>
                    <option value="(+234) Nigeria">Nigeria (+234)</option>
                    <option value="(+683) Niue">Niue (+683)</option>
                    <option value="(+1670) Northern Mariana Islands">
                      Northern Mariana Islands (+1670)
                    </option>
                    <option value="(+47) Norway">Norway (+47)</option>
                    <option value="(+968) Oman">Oman (+968)</option>
                    <option value="(+92) Pakistan">Pakistan (+92)</option>
                    <option value="(+680) Palau">Palau (+680)</option>
                    <option value="(+970) Palestine">Palestine (+970)</option>
                    <option value="(+507) Panama">Panama (+507)</option>
                    <option value="(+675) Papua New Guinea">
                      Papua New Guinea (+675)
                    </option>
                    <option value="(+595) Paraguay">Paraguay (+595)</option>
                    <option value="(+51) Peru">Peru (+51)</option>
                    <option value="(+63) Philippines">Philippines (+63)</option>
                    <option value="(+48) Poland">Poland (+48)</option>
                    <option value="(+351) Portugal">Portugal (+351)</option>
                    <option value="(+1787) Puerto Rico">
                      Puerto Rico (+1787)
                    </option>
                    <option value="(+974) Qatar">Qatar (+974)</option>
                    <option value="(+40) Romania">Romania (+40)</option>
                    <option value="(+7) Russia">Russia (+7)</option>
                    <option value="(+250) Rwanda">Rwanda (+250)</option>
                    <option value="(+290) Saint Helena">
                      Saint Helena (+290)
                    </option>
                    <option value="(+1869) Saint Kitts and Nevis">
                      Saint Kitts and Nevis (+1869)
                    </option>
                    <option value="(+1758) Saint Lucia">
                      Saint Lucia (+1758)
                    </option>
                    <option value="(+508) Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon (+508)
                    </option>
                    <option value="(+1784) Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines (+1784)
                    </option>
                    <option value="(+685) Samoa">Samoa (+685)</option>
                    <option value="(+378) San Marino">San Marino (+378)</option>
                    <option value="(+239) São Tomé and Príncipe">
                      São Tomé and Príncipe (+239)
                    </option>
                    <option value="(+966) Saudi Arabia">
                      Saudi Arabia (+966)
                    </option>
                    <option value="(+221) Senegal">Senegal (+221)</option>
                    <option value="(+381) Serbia">Serbia (+381)</option>
                    <option value="(+248) Seychelles">Seychelles (+248)</option>
                    <option value="(+232) Sierra Leone">
                      Sierra Leone (+232)
                    </option>
                    <option value="(+65) Singapore">Singapore (+65)</option>
                    <option value="(+421) Slovakia">Slovakia (+421)</option>
                    <option value="(+386) Slovenia">Slovenia (+386)</option>
                    <option value="(+677) Solomon Islands">
                      Solomon Islands (+677)
                    </option>
                    <option value="(+252) Somalia">Somalia (+252)</option>
                    <option value="(+27) South Africa">
                      South Africa (+27)
                    </option>
                    <option value="(+211) South Sudan">
                      South Sudan (+211)
                    </option>
                    <option value="(+34) Spain">Spain (+34)</option>
                    <option value="(+94) Sri Lanka">Sri Lanka (+94)</option>
                    <option value="(+249) Sudan">Sudan (+249)</option>
                    <option value="(+597) Suriname">Suriname (+597)</option>
                    <option value="(+46) Sweden">Sweden (+46)</option>
                    <option value="(+41) Switzerland">Switzerland (+41)</option>
                    <option value="(+963) Syria">Syria (+963)</option>
                    <option value="(+886) Taiwan">Taiwan (+886)</option>
                    <option value="(+992) Tajikistan">Tajikistan (+992)</option>
                    <option value="(+255) Tanzania">Tanzania (+255)</option>
                    <option value="(+66) Thailand">Thailand (+66)</option>
                    <option value="(+228) Togo">Togo (+228)</option>
                    <option value="(+690) Tokelau">Tokelau (+690)</option>
                    <option value="(+676) Tonga">Tonga (+676)</option>
                    <option value="(+1868) Trinidad and Tobago">
                      Trinidad and Tobago (+1868)
                    </option>
                    <option value="(+216) Tunisia">Tunisia (+216)</option>
                    <option value="(+90) Turkey">Turkey (+90)</option>
                    <option value="(+993) Turkmenistan">
                      Turkmenistan (+993)
                    </option>
                    <option value="(+1649) Turks and Caicos Islands">
                      Turks and Caicos Islands (+1649)
                    </option>
                    <option value="(+688) Tuvalu">Tuvalu (+688)</option>
                    <option value="(+256) Uganda">Uganda (+256)</option>
                    <option value="(+380) Ukraine">Ukraine (+380)</option>
                    <option value="(+971) United Arab Emirates">
                      United Arab Emirates (+971)
                    </option>
                    <option value="(+44) United Kingdom">
                      United Kingdom (+44)
                    </option>
                    <option value="(+1) United States">
                      United States (+1)
                    </option>
                    <option value="(+598) Uruguay">Uruguay (+598)</option>
                    <option value="(+998) Uzbekistan">Uzbekistan (+998)</option>
                    <option value="(+678) Vanuatu">Vanuatu (+678)</option>
                    <option value="(+379) Vatican City">
                      Vatican City (+379)
                    </option>
                    <option value="(+58) Venezuela">Venezuela (+58)</option>
                    <option value="(+84) Vietnam">Vietnam (+84)</option>
                    <option value="(+681) Wallis and Futuna">
                      Wallis and Futuna (+681)
                    </option>
                    <option value="(+967) Yemen">Yemen (+967)</option>
                    <option value="(+260) Zambia">Zambia (+260)</option>
                    <option value="(+263) Zimbabwe">Zimbabwe (+263)</option>
                  </select>
                </div>

                <div className=" mb-5">
                  <input
                    required
                    className=" w-full text-secondary font-medium text-lg p-4 border-b border-secondary placeholder:text-secondary outline-secondary"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className=" mb-5">
                  <select
                    required
                    name="service"
                    id="service"
                    className=" w-full text-secondary font-medium text-lg p-4 border-b border-secondary placeholder:text-secondary outline-secondary"
                  >
                    <option value="">Select a service</option>
                    <option value="logistics">Logistics</option>
                    <option value="distribution">Distribution</option>
                    <option value="image">Image</option>
                    <option value="design">Design</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="buying">Buying</option>
                    <option value="sourcing">Sourcing</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className={`flex items-center justify-center cursor-pointer w-full ${
                    !loading && "py-4"
                  } bg-secondary text-white font-title-two font-bold text-lg`}
                >
                  {loading ? (
                    <ThreeCircles
                      visible={true}
                      height="50"
                      width="50"
                      color="#ffffff"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </ComponentReveal>
          </div>
          <div className=" w-full md:w-1/2">
            <ComponentReveal x={50} delay={0.5}>
              <div className=" w-full h-full relative">
                <div className=" text-white  top-0 left-0 w-full bg-primary px-4 py-6">
                  <h3 className=" font-title-two  mb-5">
                    <span className=" font-bold"> Rivo Canada Inc. </span>has
                    offices internationally with dedicated team members ready to
                    support your needs
                  </h3>

                  <a
                    className=" font-title-two font-bold text-white mb-2 inline-block"
                    href="https://maps.app.goo.gl/kqouTzuGTFPqRmFR8"
                    target="_blank"
                  >
                    Click here to view the address
                  </a>

                  <h4 className=" mb-2 font-title-two">
                    Email: enquire@rivocanada.com
                  </h4>
                  <h4 className=" font-title-two mb-2">
                    Address: Calgary, AB <br /> Canada
                  </h4>
                </div>
                <img src={contact} alt="Contact Image" />
              </div>
            </ComponentReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
