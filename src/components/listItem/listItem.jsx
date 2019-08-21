import React, { PureComponent } from 'react';

import { List, ListItem } from 'chayns-components';

class ListItem extends PureComponent{
    constructor({
        siteId, locationId, appstoreName, facebookId
    }) {
        this.siteId = siteId;
        this.locationId = locationId;
        this.appstoreName = appstoreName;
        this.facebookId = facebookId;
    }
    render() {

    }
    getFetchData=() =>{
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=50')
            .then(response => response.json())
            .then((data) => {
                siteList.map(data.Data);
                document.getElementById("app").appendChild(CreateList.render(data.Data));
            })
            .catch((err) => { console.log(err); });
    }
}

export default ListItem;
