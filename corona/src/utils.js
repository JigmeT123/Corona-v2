import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

const colorOfEachCaseType = {
    cases: {
        hex: '#CC1034',
        multiplier: 800
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 1200
    }

}
export const sortedData = data => {
    const sortedData = [...data];
    return sortedData.sort(
        (a, b) => a.cases > b.cases
            ? -1
            : 1
    );
}
export const showDataOnMap = (data, caseType = "cases") => data.map(
    country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={colorOfEachCaseType[caseType].hex}
            fillColor={colorOfEachCaseType[caseType].hex}
            radius={Math.sqrt(country[caseType]) * colorOfEachCaseType[caseType].multiplier
}>
            <Popup>
                <div className="info__container">
                    <div
                    className='info__flag'
                        style={{
                            backgroundImage: `url(${country.countryInfo.flag})`
                        }}></div>
                    <div className="info__name">{country.country}</div>
                    <div className="info__cases">Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info__recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info__deaths">Deaths: {numeral(country.deaths).format('0,0')}</div>
                </div>

            </Popup>
        </Circle>

    )
)

export const beautyPrint = stat => stat?`${numeral(stat).format('+0.0a')}` : '+0';
