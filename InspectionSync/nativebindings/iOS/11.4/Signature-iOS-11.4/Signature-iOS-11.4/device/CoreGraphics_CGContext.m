#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CGContextStrokeRect"] = ^void(id arg0, CGRect arg1) {
		CGContextStrokeRect(arg0, arg1);
	};
	context[@"CGContextAddEllipseInRect"] = ^void(id arg0, CGRect arg1) {
		CGContextAddEllipseInRect(arg0, arg1);
	};
	context[@"CGContextSetShadowWithColor"] = ^void(id arg0, CGSize arg1, CGFloat arg2, id arg3) {
		CGContextSetShadowWithColor(arg0, arg1, arg2, arg3);
	};
	context[@"CGContextSetAllowsFontSmoothing"] = ^void(id arg0, _Bool arg1) {
		CGContextSetAllowsFontSmoothing(arg0, arg1);
	};
	context[@"CGContextResetClip"] = ^void(id arg0) {
		CGContextResetClip(arg0);
	};
	context[@"CGContextSetCMYKStrokeColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5) {
		CGContextSetCMYKStrokeColor(arg0, arg1, arg2, arg3, arg4, arg5);
	};
	context[@"CGContextAddLineToPoint"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextAddLineToPoint(arg0, arg1, arg2);
	};
	context[@"CGContextSetShouldSubpixelQuantizeFonts"] = ^void(id arg0, _Bool arg1) {
		CGContextSetShouldSubpixelQuantizeFonts(arg0, arg1);
	};
	context[@"CGContextConcatCTM"] = ^void(id arg0, CGAffineTransform arg1) {
		CGContextConcatCTM(arg0, arg1);
	};
	context[@"CGContextSetShadow"] = ^void(id arg0, CGSize arg1, CGFloat arg2) {
		CGContextSetShadow(arg0, arg1, arg2);
	};
	context[@"CGContextDrawPDFPage"] = ^void(id arg0, id arg1) {
		CGContextDrawPDFPage(arg0, arg1);
	};
	context[@"CGContextSetLineCap"] = ^void(id arg0, CGLineCap arg1) {
		CGContextSetLineCap(arg0, arg1);
	};
	context[@"CGContextAddCurveToPoint"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5, CGFloat arg6) {
		CGContextAddCurveToPoint(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	};
	context[@"CGContextSetAlpha"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetAlpha(arg0, arg1);
	};
	context[@"CGContextAddPath"] = ^void(id arg0, id arg1) {
		CGContextAddPath(arg0, arg1);
	};
	context[@"CGContextSynchronize"] = ^void(id arg0) {
		CGContextSynchronize(arg0);
	};
	context[@"CGContextSetCMYKFillColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5) {
		CGContextSetCMYKFillColor(arg0, arg1, arg2, arg3, arg4, arg5);
	};
	context[@"CGContextSetInterpolationQuality"] = ^void(id arg0, CGInterpolationQuality arg1) {
		CGContextSetInterpolationQuality(arg0, arg1);
	};
	context[@"CGContextSetTextDrawingMode"] = ^void(id arg0, CGTextDrawingMode arg1) {
		CGContextSetTextDrawingMode(arg0, arg1);
	};
	context[@"CGContextSetMiterLimit"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetMiterLimit(arg0, arg1);
	};
	context[@"CGContextSetRGBFillColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4) {
		CGContextSetRGBFillColor(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGContextSetFlatness"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetFlatness(arg0, arg1);
	};
	context[@"CGContextStrokePath"] = ^void(id arg0) {
		CGContextStrokePath(arg0);
	};
	context[@"CGContextSetPatternPhase"] = ^void(id arg0, CGSize arg1) {
		CGContextSetPatternPhase(arg0, arg1);
	};
	context[@"CGContextSetFillColorWithColor"] = ^void(id arg0, id arg1) {
		CGContextSetFillColorWithColor(arg0, arg1);
	};
	context[@"CGContextAddArcToPoint"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5) {
		CGContextAddArcToPoint(arg0, arg1, arg2, arg3, arg4, arg5);
	};
	context[@"CGContextSetStrokeColorSpace"] = ^void(id arg0, id arg1) {
		CGContextSetStrokeColorSpace(arg0, arg1);
	};
	context[@"CGContextEndPage"] = ^void(id arg0) {
		CGContextEndPage(arg0);
	};
	context[@"CGContextRotateCTM"] = ^void(id arg0, CGFloat arg1) {
		CGContextRotateCTM(arg0, arg1);
	};
	context[@"CGContextAddArc"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4, CGFloat arg5, int arg6) {
		CGContextAddArc(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	};
	context[@"CGContextConvertPointToUserSpace"] = ^CGPoint(id arg0, CGPoint arg1) {
		return CGContextConvertPointToUserSpace(arg0, arg1);
	};
	context[@"CGContextBeginTransparencyLayer"] = ^void(id arg0, id arg1) {
		CGContextBeginTransparencyLayer(arg0, arg1);
	};
	context[@"CGContextSetBlendMode"] = ^void(id arg0, CGBlendMode arg1) {
		CGContextSetBlendMode(arg0, arg1);
	};
	context[@"CGContextSetCharacterSpacing"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetCharacterSpacing(arg0, arg1);
	};
	context[@"CGContextTranslateCTM"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextTranslateCTM(arg0, arg1, arg2);
	};
	context[@"CGContextSetRGBStrokeColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4) {
		CGContextSetRGBStrokeColor(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGContextSetShouldSmoothFonts"] = ^void(id arg0, _Bool arg1) {
		CGContextSetShouldSmoothFonts(arg0, arg1);
	};
	context[@"CGContextGetUserSpaceToDeviceSpaceTransform"] = ^CGAffineTransform(id arg0) {
		return CGContextGetUserSpaceToDeviceSpaceTransform(arg0);
	};
	context[@"CGContextSaveGState"] = ^void(id arg0) {
		CGContextSaveGState(arg0);
	};
	context[@"CGContextStrokeEllipseInRect"] = ^void(id arg0, CGRect arg1) {
		CGContextStrokeEllipseInRect(arg0, arg1);
	};
	context[@"CGContextDrawImage"] = ^void(id arg0, CGRect arg1, id arg2) {
		CGContextDrawImage(arg0, arg1, arg2);
	};
	context[@"CGContextBeginPath"] = ^void(id arg0) {
		CGContextBeginPath(arg0);
	};
	context[@"CGContextFillRect"] = ^void(id arg0, CGRect arg1) {
		CGContextFillRect(arg0, arg1);
	};
	context[@"CGContextSetLineWidth"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetLineWidth(arg0, arg1);
	};
	context[@"CGContextGetPathCurrentPoint"] = ^CGPoint(id arg0) {
		return CGContextGetPathCurrentPoint(arg0);
	};
	context[@"CGContextMoveToPoint"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextMoveToPoint(arg0, arg1, arg2);
	};
	context[@"CGContextSetFont"] = ^void(id arg0, id arg1) {
		CGContextSetFont(arg0, arg1);
	};
	context[@"CGContextSetAllowsAntialiasing"] = ^void(id arg0, _Bool arg1) {
		CGContextSetAllowsAntialiasing(arg0, arg1);
	};
	context[@"CGContextSetStrokeColorWithColor"] = ^void(id arg0, id arg1) {
		CGContextSetStrokeColorWithColor(arg0, arg1);
	};
	context[@"CGContextEndTransparencyLayer"] = ^void(id arg0) {
		CGContextEndTransparencyLayer(arg0);
	};
	context[@"CGContextGetCTM"] = ^CGAffineTransform(id arg0) {
		return CGContextGetCTM(arg0);
	};
	context[@"CGContextSetShouldAntialias"] = ^void(id arg0, _Bool arg1) {
		CGContextSetShouldAntialias(arg0, arg1);
	};
	context[@"CGContextSetGrayFillColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextSetGrayFillColor(arg0, arg1, arg2);
	};
	context[@"CGContextClipToMask"] = ^void(id arg0, CGRect arg1, id arg2) {
		CGContextClipToMask(arg0, arg1, arg2);
	};
	context[@"CGContextSetTextPosition"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextSetTextPosition(arg0, arg1, arg2);
	};
	context[@"CGContextGetPathBoundingBox"] = ^CGRect(id arg0) {
		return CGContextGetPathBoundingBox(arg0);
	};
	context[@"CGContextEOClip"] = ^void(id arg0) {
		CGContextEOClip(arg0);
	};
	context[@"CGContextGetInterpolationQuality"] = ^CGInterpolationQuality(id arg0) {
		return CGContextGetInterpolationQuality(arg0);
	};
	context[@"CGContextRestoreGState"] = ^void(id arg0) {
		CGContextRestoreGState(arg0);
	};
	context[@"CGContextSetAllowsFontSubpixelQuantization"] = ^void(id arg0, _Bool arg1) {
		CGContextSetAllowsFontSubpixelQuantization(arg0, arg1);
	};
	context[@"CGContextFlush"] = ^void(id arg0) {
		CGContextFlush(arg0);
	};
	context[@"CGContextFillEllipseInRect"] = ^void(id arg0, CGRect arg1) {
		CGContextFillEllipseInRect(arg0, arg1);
	};
	context[@"CGContextDrawRadialGradient"] = ^void(id arg0, id arg1, CGPoint arg2, CGFloat arg3, CGPoint arg4, CGFloat arg5, CGGradientDrawingOptions arg6) {
		CGContextDrawRadialGradient(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
	};
	context[@"CGContextSetFillColorSpace"] = ^void(id arg0, id arg1) {
		CGContextSetFillColorSpace(arg0, arg1);
	};
	context[@"CGContextSetGrayStrokeColor"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextSetGrayStrokeColor(arg0, arg1, arg2);
	};
	context[@"CGContextClipToRect"] = ^void(id arg0, CGRect arg1) {
		CGContextClipToRect(arg0, arg1);
	};
	context[@"CGContextClip"] = ^void(id arg0) {
		CGContextClip(arg0);
	};
	context[@"CGContextCopyPath"] = ^id(id arg0) {
		return CGContextCopyPath(arg0);
	};
	context[@"CGContextDrawPath"] = ^void(id arg0, CGPathDrawingMode arg1) {
		CGContextDrawPath(arg0, arg1);
	};
	context[@"CGContextSetLineJoin"] = ^void(id arg0, CGLineJoin arg1) {
		CGContextSetLineJoin(arg0, arg1);
	};
	context[@"CGContextClearRect"] = ^void(id arg0, CGRect arg1) {
		CGContextClearRect(arg0, arg1);
	};
	context[@"CGContextSetShouldSubpixelPositionFonts"] = ^void(id arg0, _Bool arg1) {
		CGContextSetShouldSubpixelPositionFonts(arg0, arg1);
	};
	context[@"CGContextConvertSizeToUserSpace"] = ^CGSize(id arg0, CGSize arg1) {
		return CGContextConvertSizeToUserSpace(arg0, arg1);
	};
	context[@"CGContextDrawShading"] = ^void(id arg0, id arg1) {
		CGContextDrawShading(arg0, arg1);
	};
	context[@"CGContextAddQuadCurveToPoint"] = ^void(id arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3, CGFloat arg4) {
		CGContextAddQuadCurveToPoint(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGContextClosePath"] = ^void(id arg0) {
		CGContextClosePath(arg0);
	};
	context[@"CGContextSetTextMatrix"] = ^void(id arg0, CGAffineTransform arg1) {
		CGContextSetTextMatrix(arg0, arg1);
	};
	context[@"CGContextEOFillPath"] = ^void(id arg0) {
		CGContextEOFillPath(arg0);
	};
	context[@"CGContextRelease"] = ^void(id arg0) {
		CGContextRelease(arg0);
	};
	context[@"CGContextGetTextPosition"] = ^CGPoint(id arg0) {
		return CGContextGetTextPosition(arg0);
	};
	context[@"CGContextAddRect"] = ^void(id arg0, CGRect arg1) {
		CGContextAddRect(arg0, arg1);
	};
	context[@"CGContextPathContainsPoint"] = ^_Bool(id arg0, CGPoint arg1, CGPathDrawingMode arg2) {
		return CGContextPathContainsPoint(arg0, arg1, arg2);
	};
	context[@"CGContextIsPathEmpty"] = ^_Bool(id arg0) {
		return CGContextIsPathEmpty(arg0);
	};
	context[@"CGContextScaleCTM"] = ^void(id arg0, CGFloat arg1, CGFloat arg2) {
		CGContextScaleCTM(arg0, arg1, arg2);
	};
	context[@"CGContextBeginTransparencyLayerWithRect"] = ^void(id arg0, CGRect arg1, id arg2) {
		CGContextBeginTransparencyLayerWithRect(arg0, arg1, arg2);
	};
	context[@"CGContextConvertRectToUserSpace"] = ^CGRect(id arg0, CGRect arg1) {
		return CGContextConvertRectToUserSpace(arg0, arg1);
	};
	context[@"CGContextGetTypeID"] = ^CFTypeID() {
		return CGContextGetTypeID();
	};
	context[@"CGContextSetRenderingIntent"] = ^void(id arg0, CGColorRenderingIntent arg1) {
		CGContextSetRenderingIntent(arg0, arg1);
	};
	context[@"CGContextReplacePathWithStrokedPath"] = ^void(id arg0) {
		CGContextReplacePathWithStrokedPath(arg0);
	};
	context[@"CGContextDrawTiledImage"] = ^void(id arg0, CGRect arg1, id arg2) {
		CGContextDrawTiledImage(arg0, arg1, arg2);
	};
	context[@"CGContextSetAllowsFontSubpixelPositioning"] = ^void(id arg0, _Bool arg1) {
		CGContextSetAllowsFontSubpixelPositioning(arg0, arg1);
	};
	context[@"CGContextGetClipBoundingBox"] = ^CGRect(id arg0) {
		return CGContextGetClipBoundingBox(arg0);
	};
	context[@"CGContextRetain"] = ^id(id arg0) {
		return CGContextRetain(arg0);
	};
	context[@"CGContextStrokeRectWithWidth"] = ^void(id arg0, CGRect arg1, CGFloat arg2) {
		CGContextStrokeRectWithWidth(arg0, arg1, arg2);
	};
	context[@"CGContextDrawLinearGradient"] = ^void(id arg0, id arg1, CGPoint arg2, CGPoint arg3, CGGradientDrawingOptions arg4) {
		CGContextDrawLinearGradient(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGContextSetFontSize"] = ^void(id arg0, CGFloat arg1) {
		CGContextSetFontSize(arg0, arg1);
	};
	context[@"CGContextFillPath"] = ^void(id arg0) {
		CGContextFillPath(arg0);
	};
	context[@"CGContextConvertSizeToDeviceSpace"] = ^CGSize(id arg0, CGSize arg1) {
		return CGContextConvertSizeToDeviceSpace(arg0, arg1);
	};
	context[@"CGContextGetTextMatrix"] = ^CGAffineTransform(id arg0) {
		return CGContextGetTextMatrix(arg0);
	};
	context[@"CGContextConvertRectToDeviceSpace"] = ^CGRect(id arg0, CGRect arg1) {
		return CGContextConvertRectToDeviceSpace(arg0, arg1);
	};
	context[@"CGContextConvertPointToDeviceSpace"] = ^CGPoint(id arg0, CGPoint arg1) {
		return CGContextConvertPointToDeviceSpace(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGPathFill"] = @0;
	context[@"kCGPathEOFill"] = @1;
	context[@"kCGPathStroke"] = @2;
	context[@"kCGPathFillStroke"] = @3;
	context[@"kCGPathEOFillStroke"] = @4;

	context[@"kCGTextFill"] = @0;
	context[@"kCGTextStroke"] = @1;
	context[@"kCGTextFillStroke"] = @2;
	context[@"kCGTextInvisible"] = @3;
	context[@"kCGTextFillClip"] = @4;
	context[@"kCGTextStrokeClip"] = @5;
	context[@"kCGTextFillStrokeClip"] = @6;
	context[@"kCGTextClip"] = @7;

	context[@"kCGEncodingFontSpecific"] = @0;
	context[@"kCGEncodingMacRoman"] = @1;

	context[@"kCGInterpolationDefault"] = @0;
	context[@"kCGInterpolationNone"] = @1;
	context[@"kCGInterpolationLow"] = @2;
	context[@"kCGInterpolationMedium"] = @4;
	context[@"kCGInterpolationHigh"] = @3;

	context[@"kCGBlendModeNormal"] = @0;
	context[@"kCGBlendModeMultiply"] = @1;
	context[@"kCGBlendModeScreen"] = @2;
	context[@"kCGBlendModeOverlay"] = @3;
	context[@"kCGBlendModeDarken"] = @4;
	context[@"kCGBlendModeLighten"] = @5;
	context[@"kCGBlendModeColorDodge"] = @6;
	context[@"kCGBlendModeColorBurn"] = @7;
	context[@"kCGBlendModeSoftLight"] = @8;
	context[@"kCGBlendModeHardLight"] = @9;
	context[@"kCGBlendModeDifference"] = @10;
	context[@"kCGBlendModeExclusion"] = @11;
	context[@"kCGBlendModeHue"] = @12;
	context[@"kCGBlendModeSaturation"] = @13;
	context[@"kCGBlendModeColor"] = @14;
	context[@"kCGBlendModeLuminosity"] = @15;
	context[@"kCGBlendModeClear"] = @16;
	context[@"kCGBlendModeCopy"] = @17;
	context[@"kCGBlendModeSourceIn"] = @18;
	context[@"kCGBlendModeSourceOut"] = @19;
	context[@"kCGBlendModeSourceAtop"] = @20;
	context[@"kCGBlendModeDestinationOver"] = @21;
	context[@"kCGBlendModeDestinationIn"] = @22;
	context[@"kCGBlendModeDestinationOut"] = @23;
	context[@"kCGBlendModeDestinationAtop"] = @24;
	context[@"kCGBlendModeXOR"] = @25;
	context[@"kCGBlendModePlusDarker"] = @26;
	context[@"kCGBlendModePlusLighter"] = @27;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGContext_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
