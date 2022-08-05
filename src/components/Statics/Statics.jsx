import propTypes from "prop-types";
import { MainTitle, LiInfo, UlInfo, Info } from "./Statics.styled";

const Static = ({ label, percentage }) => {
   return (
      <LiInfo className="item">
         <Info className="label">{label}</Info>
         <Info className="percentage">{percentage}%</Info>
      </LiInfo>
   )
}


export const Statics = ({ title, staticsData }) => {
   return (
      <section className="statistics">
         <MainTitle>{title}</MainTitle>
         <UlInfo className="stat-list">
            {staticsData.map((staticData) => {
               return(
               <Static key={staticData.id} label={staticData.label} percentage={staticData.percentage} />
               )
            })}
         </UlInfo>
         </section>
   )
}