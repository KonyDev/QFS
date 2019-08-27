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
	context[@"CGFontCreateCopyWithVariations"] = ^id(id arg0, id arg1) {
		return CGFontCreateCopyWithVariations(arg0, arg1);
	};
	context[@"CGFontCopyTableForTag"] = ^id(id arg0, uint32_t arg1) {
		return CGFontCopyTableForTag(arg0, arg1);
	};
	context[@"CGFontGetTypeID"] = ^CFTypeID() {
		return CGFontGetTypeID();
	};
	context[@"CGFontGetFontBBox"] = ^CGRect(id arg0) {
		return CGFontGetFontBBox(arg0);
	};
	context[@"CGFontGetItalicAngle"] = ^CGFloat(id arg0) {
		return CGFontGetItalicAngle(arg0);
	};
	context[@"CGFontGetAscent"] = ^int(id arg0) {
		return CGFontGetAscent(arg0);
	};
	context[@"CGFontCreateWithFontName"] = ^id(id arg0) {
		return CGFontCreateWithFontName(arg0);
	};
	context[@"CGFontGetUnitsPerEm"] = ^int(id arg0) {
		return CGFontGetUnitsPerEm(arg0);
	};
	context[@"CGFontRelease"] = ^void(id arg0) {
		CGFontRelease(arg0);
	};
	context[@"CGFontCanCreatePostScriptSubset"] = ^_Bool(id arg0, CGFontPostScriptFormat arg1) {
		return CGFontCanCreatePostScriptSubset(arg0, arg1);
	};
	context[@"CGFontGetDescent"] = ^int(id arg0) {
		return CGFontGetDescent(arg0);
	};
	context[@"CGFontCreateWithDataProvider"] = ^id(id arg0) {
		return CGFontCreateWithDataProvider(arg0);
	};
	context[@"CGFontGetLeading"] = ^int(id arg0) {
		return CGFontGetLeading(arg0);
	};
	context[@"CGFontGetStemV"] = ^CGFloat(id arg0) {
		return CGFontGetStemV(arg0);
	};
	context[@"CGFontGetCapHeight"] = ^int(id arg0) {
		return CGFontGetCapHeight(arg0);
	};
	context[@"CGFontRetain"] = ^id(id arg0) {
		return CGFontRetain(arg0);
	};
	context[@"CGFontCopyGlyphNameForGlyph"] = ^id(id arg0, CGGlyph arg1) {
		return CGFontCopyGlyphNameForGlyph(arg0, arg1);
	};
	context[@"CGFontCopyPostScriptName"] = ^id(id arg0) {
		return CGFontCopyPostScriptName(arg0);
	};
	context[@"CGFontGetNumberOfGlyphs"] = ^size_t(id arg0) {
		return CGFontGetNumberOfGlyphs(arg0);
	};
	context[@"CGFontCopyFullName"] = ^id(id arg0) {
		return CGFontCopyFullName(arg0);
	};
	context[@"CGFontCopyVariations"] = ^id(id arg0) {
		return CGFontCopyVariations(arg0);
	};
	context[@"CGFontGetXHeight"] = ^int(id arg0) {
		return CGFontGetXHeight(arg0);
	};
	context[@"CGFontGetGlyphWithGlyphName"] = ^CGGlyph(id arg0, id arg1) {
		return CGFontGetGlyphWithGlyphName(arg0, arg1);
	};
	context[@"CGFontCopyVariationAxes"] = ^id(id arg0) {
		return CGFontCopyVariationAxes(arg0);
	};
	context[@"CGFontCopyTableTags"] = ^id(id arg0) {
		return CGFontCopyTableTags(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGFontPostScriptFormatType1"] = @1;
	context[@"kCGFontPostScriptFormatType3"] = @3;
	context[@"kCGFontPostScriptFormatType42"] = @42;

	context[@"CGGlyphMin"] = @0;
	context[@"CGGlyphMax"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGFontVariationAxisDefaultValue;
	if (p != NULL) context[@"kCGFontVariationAxisDefaultValue"] = [JSValue valueWithObject: (__bridge id) kCGFontVariationAxisDefaultValue inContext: context];
	p = (void*) &kCGFontIndexInvalid;
	if (p != NULL) context[@"kCGFontIndexInvalid"] = @(kCGFontIndexInvalid);
	p = (void*) &kCGFontVariationAxisMaxValue;
	if (p != NULL) context[@"kCGFontVariationAxisMaxValue"] = [JSValue valueWithObject: (__bridge id) kCGFontVariationAxisMaxValue inContext: context];
	p = (void*) &kCGFontIndexMax;
	if (p != NULL) context[@"kCGFontIndexMax"] = @(kCGFontIndexMax);
	p = (void*) &kCGFontVariationAxisMinValue;
	if (p != NULL) context[@"kCGFontVariationAxisMinValue"] = [JSValue valueWithObject: (__bridge id) kCGFontVariationAxisMinValue inContext: context];
	p = (void*) &kCGGlyphMax;
	if (p != NULL) context[@"kCGGlyphMax"] = @(kCGGlyphMax);
	p = (void*) &kCGFontVariationAxisName;
	if (p != NULL) context[@"kCGFontVariationAxisName"] = [JSValue valueWithObject: (__bridge id) kCGFontVariationAxisName inContext: context];
}
void load_CoreGraphics_CGFont_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
