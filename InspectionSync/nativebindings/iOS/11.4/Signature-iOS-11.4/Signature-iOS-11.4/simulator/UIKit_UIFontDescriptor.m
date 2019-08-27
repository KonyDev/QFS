#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIFontDescriptor (Exports)
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithFontAttributes: (NSDictionary *) attributes 
{
	id resultVal__;
	resultVal__ = [[self initWithFontAttributes: attributes ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIFontDescriptor class], @protocol(UIFontDescriptorInstanceExports));
	class_addProtocol([UIFontDescriptor class], @protocol(UIFontDescriptorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIFontDescriptorTraitItalic"] = @1U;
	context[@"UIFontDescriptorTraitBold"] = @2U;
	context[@"UIFontDescriptorTraitExpanded"] = @32U;
	context[@"UIFontDescriptorTraitCondensed"] = @64U;
	context[@"UIFontDescriptorTraitMonoSpace"] = @1024U;
	context[@"UIFontDescriptorTraitVertical"] = @2048U;
	context[@"UIFontDescriptorTraitUIOptimized"] = @4096U;
	context[@"UIFontDescriptorTraitTightLeading"] = @32768U;
	context[@"UIFontDescriptorTraitLooseLeading"] = @65536U;
	context[@"UIFontDescriptorClassMask"] = @-268435456U;
	context[@"UIFontDescriptorClassUnknown"] = @0U;
	context[@"UIFontDescriptorClassOldStyleSerifs"] = @268435456U;
	context[@"UIFontDescriptorClassTransitionalSerifs"] = @536870912U;
	context[@"UIFontDescriptorClassModernSerifs"] = @805306368U;
	context[@"UIFontDescriptorClassClarendonSerifs"] = @1073741824U;
	context[@"UIFontDescriptorClassSlabSerifs"] = @1342177280U;
	context[@"UIFontDescriptorClassFreeformSerifs"] = @1879048192U;
	context[@"UIFontDescriptorClassSansSerif"] = @-2147483648U;
	context[@"UIFontDescriptorClassOrnamentals"] = @-1879048192U;
	context[@"UIFontDescriptorClassScripts"] = @-1610612736U;
	context[@"UIFontDescriptorClassSymbolic"] = @-1073741824U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIFontWeightHeavy;
	if (p != NULL) context[@"UIFontWeightHeavy"] = @(UIFontWeightHeavy);
	p = (void*) &UIFontWeightSemibold;
	if (p != NULL) context[@"UIFontWeightSemibold"] = @(UIFontWeightSemibold);
	p = (void*) &UIFontWeightMedium;
	if (p != NULL) context[@"UIFontWeightMedium"] = @(UIFontWeightMedium);
	p = (void*) &UIFontDescriptorFixedAdvanceAttribute;
	if (p != NULL) context[@"UIFontDescriptorFixedAdvanceAttribute"] = UIFontDescriptorFixedAdvanceAttribute;
	p = (void*) &UIFontDescriptorFaceAttribute;
	if (p != NULL) context[@"UIFontDescriptorFaceAttribute"] = UIFontDescriptorFaceAttribute;
	p = (void*) &UIFontDescriptorTextStyleAttribute;
	if (p != NULL) context[@"UIFontDescriptorTextStyleAttribute"] = UIFontDescriptorTextStyleAttribute;
	p = (void*) &UIFontFeatureTypeIdentifierKey;
	if (p != NULL) context[@"UIFontFeatureTypeIdentifierKey"] = UIFontFeatureTypeIdentifierKey;
	p = (void*) &UIFontWeightThin;
	if (p != NULL) context[@"UIFontWeightThin"] = @(UIFontWeightThin);
	p = (void*) &UIFontFeatureSelectorIdentifierKey;
	if (p != NULL) context[@"UIFontFeatureSelectorIdentifierKey"] = UIFontFeatureSelectorIdentifierKey;
	p = (void*) &UIFontTextStyleFootnote;
	if (p != NULL) context[@"UIFontTextStyleFootnote"] = UIFontTextStyleFootnote;
	p = (void*) &UIFontTextStyleTitle1;
	if (p != NULL) context[@"UIFontTextStyleTitle1"] = UIFontTextStyleTitle1;
	p = (void*) &UIFontTextStyleTitle2;
	if (p != NULL) context[@"UIFontTextStyleTitle2"] = UIFontTextStyleTitle2;
	p = (void*) &UIFontWidthTrait;
	if (p != NULL) context[@"UIFontWidthTrait"] = UIFontWidthTrait;
	p = (void*) &UIFontWeightTrait;
	if (p != NULL) context[@"UIFontWeightTrait"] = UIFontWeightTrait;
	p = (void*) &UIFontDescriptorVisibleNameAttribute;
	if (p != NULL) context[@"UIFontDescriptorVisibleNameAttribute"] = UIFontDescriptorVisibleNameAttribute;
	p = (void*) &UIFontDescriptorTraitsAttribute;
	if (p != NULL) context[@"UIFontDescriptorTraitsAttribute"] = UIFontDescriptorTraitsAttribute;
	p = (void*) &UIFontTextStyleSubheadline;
	if (p != NULL) context[@"UIFontTextStyleSubheadline"] = UIFontTextStyleSubheadline;
	p = (void*) &UIFontTextStyleCallout;
	if (p != NULL) context[@"UIFontTextStyleCallout"] = UIFontTextStyleCallout;
	p = (void*) &UIFontDescriptorCharacterSetAttribute;
	if (p != NULL) context[@"UIFontDescriptorCharacterSetAttribute"] = UIFontDescriptorCharacterSetAttribute;
	p = (void*) &UIFontDescriptorFamilyAttribute;
	if (p != NULL) context[@"UIFontDescriptorFamilyAttribute"] = UIFontDescriptorFamilyAttribute;
	p = (void*) &UIFontDescriptorSizeAttribute;
	if (p != NULL) context[@"UIFontDescriptorSizeAttribute"] = UIFontDescriptorSizeAttribute;
	p = (void*) &UIFontDescriptorCascadeListAttribute;
	if (p != NULL) context[@"UIFontDescriptorCascadeListAttribute"] = UIFontDescriptorCascadeListAttribute;
	p = (void*) &UIFontTextStyleCaption2;
	if (p != NULL) context[@"UIFontTextStyleCaption2"] = UIFontTextStyleCaption2;
	p = (void*) &UIFontTextStyleCaption1;
	if (p != NULL) context[@"UIFontTextStyleCaption1"] = UIFontTextStyleCaption1;
	p = (void*) &UIFontWeightLight;
	if (p != NULL) context[@"UIFontWeightLight"] = @(UIFontWeightLight);
	p = (void*) &UIFontTextStyleLargeTitle;
	if (p != NULL) context[@"UIFontTextStyleLargeTitle"] = UIFontTextStyleLargeTitle;
	p = (void*) &UIFontSlantTrait;
	if (p != NULL) context[@"UIFontSlantTrait"] = UIFontSlantTrait;
	p = (void*) &UIFontDescriptorFeatureSettingsAttribute;
	if (p != NULL) context[@"UIFontDescriptorFeatureSettingsAttribute"] = UIFontDescriptorFeatureSettingsAttribute;
	p = (void*) &UIFontWeightBold;
	if (p != NULL) context[@"UIFontWeightBold"] = @(UIFontWeightBold);
	p = (void*) &UIFontWeightRegular;
	if (p != NULL) context[@"UIFontWeightRegular"] = @(UIFontWeightRegular);
	p = (void*) &UIFontTextStyleHeadline;
	if (p != NULL) context[@"UIFontTextStyleHeadline"] = UIFontTextStyleHeadline;
	p = (void*) &UIFontDescriptorNameAttribute;
	if (p != NULL) context[@"UIFontDescriptorNameAttribute"] = UIFontDescriptorNameAttribute;
	p = (void*) &UIFontSymbolicTrait;
	if (p != NULL) context[@"UIFontSymbolicTrait"] = UIFontSymbolicTrait;
	p = (void*) &UIFontWeightBlack;
	if (p != NULL) context[@"UIFontWeightBlack"] = @(UIFontWeightBlack);
	p = (void*) &UIFontWeightUltraLight;
	if (p != NULL) context[@"UIFontWeightUltraLight"] = @(UIFontWeightUltraLight);
	p = (void*) &UIFontTextStyleTitle3;
	if (p != NULL) context[@"UIFontTextStyleTitle3"] = UIFontTextStyleTitle3;
	p = (void*) &UIFontDescriptorMatrixAttribute;
	if (p != NULL) context[@"UIFontDescriptorMatrixAttribute"] = UIFontDescriptorMatrixAttribute;
	p = (void*) &UIFontTextStyleBody;
	if (p != NULL) context[@"UIFontTextStyleBody"] = UIFontTextStyleBody;
}
void load_UIKit_UIFontDescriptor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
