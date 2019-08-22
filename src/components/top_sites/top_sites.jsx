import React, { PureComponent } from 'react';
import { Accordion } from 'chayns-components';
import { List, ListItem, SmallWaitCursor } from 'chayns-components';


class CreateList extends PureComponent {
    constructor() {
        super()
        this.state = {
            loading: false,
            topSitesList: [],
            placeholderList: [],
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    topSitesList: data.Data,
                })
                this.list = data.Data;
            })
    }

    createList() {
        const { topSitesList } = this.state;
        return topSitesList.map(({ siteId, locationId, appstoreName, facebookId }) => <ListItem
            title={appstoreName} onClick={() => window.open(`https://chayns.net/${siteId}`)}
            image={`https://sub60.tobit.com/l/${siteId}`}
            right={(
                <img
                    style={{
                        margin: "5px",
                        width: "20px",
                        height: "20px"
                    }}
                    src='https://de.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png'
                    onClick={() => window.open(`https://www.facebook.com/profile.php?id=${facebookId}`)}
                />
            )}
        />
        );
    }

    render() {
        const siteList = this.createList();

        const onSearch = (searchText) => {
            const { topSitesList } = this.state;
            const filterList = this.list.filter(e => e.appstoreName.toLowerCase().includes(searchText.toLowerCase()));
            this.setState({
                topSitesList: null
            })
            this.setState({
                topSitesList: filterList
            });
            return (this.createList());
        }

        return (
            <Accordion head="Top Seiten" onSearchEnter={onSearch} searchPlaceholder="Suchen...">
                <div className="accordion__content">
                    <List>
                        {siteList}
                    </List>
                </div>
            </Accordion >
        )
    }

}

export default CreateList;
