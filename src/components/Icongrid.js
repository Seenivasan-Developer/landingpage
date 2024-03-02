export function Icongrid({ idata }) {
  return <>
    {idata.map((idt, index) => {
      return (
        <div key={index} className={idt.maindivclass}>
          {idt.IsShowcase ?
         <> <div className={idt.secdivclass} style={{ backgroundImage: idt.backgroundImage }}></div>
          <div className={idt.thrdivclass}>
          <h2>{idt.iconhead}</h2>
          <p className={idt.pclass}>{idt.iconcontent}</p>
        </div></>
          :<div className={idt.secdivclass} style={{ backgroundImage: idt.backgroundImage }}>
            {idt.isthrimgtag ? <img className={idt.thrdivclass} src={idt.backImage} alt="..." /> : <div className={idt.thrdivclass}><i className={idt.iconclass}></i></div>}
            {idt.htype3 ? <h3>{idt.iconhead}</h3> : <h5>{idt.iconhead}</h5>}
            <p className={idt.pclass}>{idt.iconcontent}</p>
          </div>}
        </div>
      )
    })}
  </>

}
