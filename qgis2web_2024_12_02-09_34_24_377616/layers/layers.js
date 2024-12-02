var wms_layers = [];

var format_Mapadelmundo_0 = new ol.format.GeoJSON();
var features_Mapadelmundo_0 = format_Mapadelmundo_0.readFeatures(json_Mapadelmundo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadelmundo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadelmundo_0.addFeatures(features_Mapadelmundo_0);
var lyr_Mapadelmundo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadelmundo_0, 
                style: style_Mapadelmundo_0,
                popuplayertitle: "Mapa del mundo",
                interactive: true,
                title: '<img src="styles/legend/Mapadelmundo_0.png" /> Mapa del mundo'
            });
var lyr_NDWI_CostaRica_2023_Semestre1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDWI_CostaRica_2023_Semestre1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDWI_CostaRica_2023_Semestre1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9699000.000000, 612941.274917, -9189000.000000, 1259099.098915]
                            })
                        });

lyr_Mapadelmundo_0.setVisible(true);lyr_NDWI_CostaRica_2023_Semestre1_1.setVisible(true);
var layersList = [lyr_Mapadelmundo_0,lyr_NDWI_CostaRica_2023_Semestre1_1];
lyr_Mapadelmundo_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Mapadelmundo_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Mapadelmundo_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Mapadelmundo_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});