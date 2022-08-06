import propTypes from "prop-types";
import { MainTitle, LiInfo, UlInfo, Info } from "./Statics.styled";

const Static = ({ staticData }) => {
   return (
      <LiInfo className="item" >
         <Info className="label">{staticData.label}</Info>
         <Info className="percentage">{staticData.percentage}%</Info>
      </LiInfo>
   )
}


export const Statics = ({ title, staticsData }) => {
   return (
      <section className="statistics">
         <MainTitle>{title}</MainTitle>
         <UlInfo>
            {staticsData.map((staticData) => {
               return(
               <Static key={staticData.id} staticData={staticData} />
               )
            })}
         </UlInfo>
         </section>
   )
}
Statics.propTypes = {
   id: propTypes.string.isRequired,
   title: propTypes.string.isRequired,
   staticData: propTypes.number.isRequired
}.isRequired