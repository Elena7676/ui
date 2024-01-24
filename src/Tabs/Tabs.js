
import TabsItem from "./TabItem";

export const Tabs =( {setActiveTab} ) => {
    return (
        <div className="bnbWrap">
            {
                [`potter's wheel`, 'glaze and painting', 'hand modeling'].map((tab, index) => (
                    <TabsItem 
                    key = {index}
                    tab = {tab}
                    index = {index}
                    setActiveTab = {setActiveTab}
                    />
                ))
            }
        </div>
    )
}