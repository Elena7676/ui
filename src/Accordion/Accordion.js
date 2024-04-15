import { AccordionItem } from "./AccordionItem"
import { List } from "./List"

export const Accordion =()=> {
    return(
        <div className="containerAccordion">
            {List.map((item, index) => 
                <AccordionItem key={index} title={item.title} content={item.content} arrow={item.arrow}/>
            )}
        </div>
    )
}