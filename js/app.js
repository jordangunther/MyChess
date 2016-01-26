angular.module('myChessApp', [])
.controller('mainCtrl', function ($scope){
	$scope.whiteQueen = {};
	$scope.whiteQueen.piece = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEDUlEQVRoQ8WZ/bVNMRDF96sAFaACVIAKUAEqQAWoABXwKkAFqAAVoAJUwPotmbXyzsu52ZPkLvnn3nNvzmT2zJ6PJCc63rgi6YWk62WJL5KeSPp+jCVPjiFUEiA+S7q4kf9L0o1jgDkWkHeS7kj6JOluAcNvNyW9r35bZscMkAxVfhZvXJKEFxh4h9+h1tUGgoz8c6+7QLJUQfkLkmogyPgm6UehXq1MVv4wkCxV3ki6L+mjpHtl1beSbkk6lfRgo0lW/jCQLFXIVAR7a0CrbebKyh8GcogqvxvZCRCAgUaRuZBxWRJpmMxVj6z8YSAZqrwu1PlaqFQHO1S7JumVpMeVNhn5TTdngh1LEsDbgXIUOv4n1RILeIkADhDxDt6BVsghdogNPAf4KJy1fOTwe7eIukAQjmLPShDzTD1gEeiCwiiGQswLJVvWC7AohwF4B4DQEGNQfxgkBdbrgmByBkgo9ad8iXdZ7GmlMUWQ7HRo4EWKY4znRWmet/I7ov79PQIEq8FzApbvjJeSHpXvh7wRSoVXeK7jJbId8dWi2i6oESARmNACAAyogZUZrgJhhHo+CYBGs1VrDnpmBAi0+VC4i1e2AW1RoTEJY5C2ibHblWEseSNAEBwcj8o9CwYQGAfvODF2DtwoEKwW6RgQ0I1UCrddUChPrBEvtCw82+l2i2QUSMRFtOaW+zuTouV3DXFG3AyQEAQdsCifdUp1wKE8nsWjEfzOe8uo1VtsrxYM1YjeYvy/wiOtdVC4te8IIPU+xdGzO2cWCAFKISRg3fqxVQpKEWsUxqH4mPVInfe7FjMmAIj6MQRmxiNR4Um5BPtosFJg6RBIxemKHgaaAcL+m3rS2vEZDjgzJfbzewcTXXkzQFiUFn4lkFaC6IKYjZGgFpR6OEmtOJH8L9Qi2AGBV1aM7dY4JXOGWtGm0HoT7KOAoBPeJeCHMtYstWqLxYHD3l59a9167w4IqDk1Zj3C4jUIUqmbhuuzr2kws0ACBICwKgplBpREBmMKzAyQ2KdDJxSizRgZvIssjoi25122vFEgsd0FRIZOe4rVNEtvc2eCPQ6d6wMI23o7E+PgYej+JOMRMg3nV3hgtNN1wZIwOA/gvMtKyS6Q1Z2uC4g2yDqpcYHUnS57D+sY09W2MY8mEvraHbELZGWn6+JLdcQukNiiruh0s0CspOQCWdXpuiDqqwarI3aB1L2Rq8yKeTSUgOpmLhcISkWeX6GgK8OuUy6QuvKO9FSu4jEvjIYnqPTdRtQFElnL4mtW6535EZfWPt4BEtYZ3k9PAItzgS7FHCBx1ezcRE3o3Hw1brZaV9pnXnCAHO281kRtre8A2V5cmusvnda9U3SAkLHY+GSvDFYh4eqBOD2Yuf4CC7gIQrroBeUAAAAASUVORK5CYII=";
	$scope.whiteQueen.cls = "icon icons8-Queen";
})
.directive('chessPiece', function() {
	var directive = {};
	directive.restrict = 'E';
	directive.template = "<img class='icon icons8-Pawn-Filled' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACOUlEQVRoQ+2Z4TEEQRCF30VABogAESADIkAEiAARIAJkIAMlAkSADIiAelU76kqd6Z7ut7VXW9t/Z872N6+n542ZYSQxGwkHJpBlU3JSZFKkpxWYSstY2FUAJwD2AWx1c18APAC4AfCpFqYPRY4AXAEgzKIgxBmAOyWMGoQQt84Ej5UwShAq8FZR4i8fldlQlZkS5ALAuVONMu0SAH+XDiXI89zG9ibGBrDtnVybpwT5DiYkyUHyRzqA0YCwTDYbVXkNlOPCTygVGc1mZ/t9B7DiVOULwPoytl/m33IgHnSWxcldn6YsrfIlwlxXlKESnEPfJYs+QJgcy+y0M42lAXBjM3lCLrVpPOySL27XWm12OULdWxM94ypFIh2r5EcnTKBUqEBoFtmBIsFOR/OYChUIk1kLZvKRWITfT6pARlNa5Qxhp/LaFHYx7g3JTVGlSLCqdD9TgbDlUomnzqZ4MmRz2AFAZdiKU6EA4eH3mHCxhNjLHpJZkCxEUSENkwFRQczD0EiylTdHFIQQvKNHD8H/EiUE7/DNXiwKwrbJ/yT2EfRedMdNEQXJWBIrwZBlaQFpdbdWwtZ4kzv2gmQsiJWwNe5yx16QPkvJAnGVmhck426tRK1xlzv2goymtCLu1lppa7zJHXsVsT46+LgXJOJus3BN7tgLEnkyyILMezDz6cEDwlsf3wSHDPOZzgMypBpl8Xhh262tpAck+u6hVrCaqwdkyMNQqgg7Fm0779dDBMuK+7R6r/8B40ZiM/8+EcYAAAAASUVORK5CYII=' width='60' height='60'>";
	// directive.scope = {
	// 	chessPiece : "piece"
	// }
	// directive.compile = function(element, attributes){
	// 	var linkFunction = function($scope, element, attributes) {
	//         element.html("<img class="+$scope.chessPiece.cls+"src=" + $scope.chessPiece.piece + "width='60' height='60'>");
	//     }
	//     return linkFunction;
	// }
	return directive;
})
