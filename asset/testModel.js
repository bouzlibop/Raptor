{
	"metadata": {
		"version": 4.3,
		"type": "Object",
		"generator": "ObjectExporter"
	},
	"geometries": [
		{
			"uuid": "C83DA2CE-CB0C-401B-B8BA-DE1170612987",
			"type": "PlaneGeometry",
			"width": 200,
			"height": 200,
			"widthSegments": 1,
			"heightSegments": 1
		},
		{
			"uuid": "D9904F1C-A6AC-430D-A66A-BD3C45052A06",
			"type": "CubeGeometry",
			"width": 100,
			"height": 100,
			"depth": 100,
			"widthSegments": 1,
			"heightSegments": 1,
			"depthSegments": 1
		}],
	"materials": [
		{
			"uuid": "9D6D5760-ADF0-45A9-AD1E-E711EBD51437",
			"type": "MeshPhongMaterial",
			"color": 16777215,
			"ambient": 16777215,
			"emissive": 0,
			"specular": 1118481,
			"shininess": 30,
			"opacity": 1,
			"transparent": false,
			"wireframe": false
		},
		{
			"uuid": "7581A842-B368-4B03-94B9-6295CE9C05FA",
			"type": "MeshPhongMaterial",
			"color": 3192323,
			"ambient": 16777215,
			"emissive": 0,
			"specular": 1118481,
			"shininess": 30,
			"opacity": 1,
			"transparent": false,
			"wireframe": false
		}],
	"object": {
		"uuid": "486DA2B5-D3AD-455C-9416-C5841E16CF0E",
		"type": "Scene",
		"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
		"children": [
			{
				"uuid": "3A03F809-6FD9-41B2-B901-F6C041249256",
				"name": "PointLight 1",
				"type": "PointLight",
				"color": 16777215,
				"intensity": 1,
				"distance": 0,
				"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,267.4116516113281,282.99969482421875,156.84396362304688,1]
			},
			{
				"uuid": "8BE9BF9B-6C0B-4E4A-B46D-04CCF6B1EACB",
				"name": "Plane 1",
				"type": "Mesh",
				"geometry": "C83DA2CE-CB0C-401B-B8BA-DE1170612987",
				"material": "9D6D5760-ADF0-45A9-AD1E-E711EBD51437",
				"matrix": [1,0,0,0,0,2.220446049250313e-16,-1,0,0,1,2.220446049250313e-16,0,-86.5738296508789,-20.127120971679688,104.26084899902344,1]
			},
			{
				"uuid": "E7EF9817-CB8C-4C8B-AA16-E46F8D41D1DE",
				"name": "Cube 2",
				"type": "Mesh",
				"geometry": "D9904F1C-A6AC-430D-A66A-BD3C45052A06",
				"material": "7581A842-B368-4B03-94B9-6295CE9C05FA",
				"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,-108.5447998046875,80.63008880615234,82.78801727294922,1]
			},
			{
				"uuid": "2F2B3F78-1E66-4E64-B999-6216FB228193",
				"name": "AmbientLight 2",
				"type": "AmbientLight",
				"color": 74307,
				"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,-5.730000019073486,115.38999938964844,-2.430000066757202,1]
			}]
	}
}