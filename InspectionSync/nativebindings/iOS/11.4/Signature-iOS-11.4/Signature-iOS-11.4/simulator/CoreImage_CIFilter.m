#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIFilter (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation CIFilter (CIFilterCIFilterXMPSerializationCategoryExports)
+(NSArray *) jsfilterArrayFromSerializedXMP: (NSData *) xmpData inputImageExtent: (CGRect) extent error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	NSArray * resultVal__;
	resultVal__ = [self filterArrayFromSerializedXMP: xmpData inputImageExtent: extent error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
@end
@implementation CIFilter (CIFilterCIFilterRegistryCategoryExports)
+(CIFilter *) jsfilterWithName: (NSString *) name keysAndValues: (id) key0 arguments: (NSArray *) args 
{
	CIFilter * resultVal__;
	if ([args count] == 0) resultVal__ = [self filterWithName: name keysAndValues: key0 , nil];
	else if ([args count] == 1) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], nil];
	else if ([args count] == 2) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], nil];
	else if ([args count] == 3) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], nil];
	else if ([args count] == 4) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], nil];
	else if ([args count] == 5) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], nil];
	else if ([args count] == 6) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], nil];
	else if ([args count] == 7) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], nil];
	else if ([args count] == 8) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], nil];
	else if ([args count] == 9) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], nil];
	else if ([args count] >= 10) resultVal__ = [self filterWithName: name keysAndValues: key0 , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], nil];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIFilter class], @protocol(CIFilterInstanceExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterClassExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterCIFilterXMPSerializationCategoryInstanceExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterCIFilterXMPSerializationCategoryClassExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterCIFilterRegistryCategoryInstanceExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterCIFilterRegistryCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCIUISetDevelopment;
	if (p != NULL) context[@"kCIUISetDevelopment"] = kCIUISetDevelopment;
	p = (void*) &kCIUISetBasic;
	if (p != NULL) context[@"kCIUISetBasic"] = kCIUISetBasic;
	p = (void*) &kCIAttributeMax;
	if (p != NULL) context[@"kCIAttributeMax"] = kCIAttributeMax;
	p = (void*) &kCIInputColorKey;
	if (p != NULL) context[@"kCIInputColorKey"] = kCIInputColorKey;
	p = (void*) &kCIOutputImageKey;
	if (p != NULL) context[@"kCIOutputImageKey"] = kCIOutputImageKey;
	p = (void*) &kCIInputAspectRatioKey;
	if (p != NULL) context[@"kCIInputAspectRatioKey"] = kCIInputAspectRatioKey;
	p = (void*) &kCIAttributeMin;
	if (p != NULL) context[@"kCIAttributeMin"] = kCIAttributeMin;
	p = (void*) &kCIInputRadiusKey;
	if (p != NULL) context[@"kCIInputRadiusKey"] = kCIInputRadiusKey;
	p = (void*) &kCICategoryTileEffect;
	if (p != NULL) context[@"kCICategoryTileEffect"] = kCICategoryTileEffect;
	p = (void*) &kCIInputDisparityImageKey;
	if (p != NULL) context[@"kCIInputDisparityImageKey"] = kCIInputDisparityImageKey;
	p = (void*) &kCIAttributeTypeAngle;
	if (p != NULL) context[@"kCIAttributeTypeAngle"] = kCIAttributeTypeAngle;
	p = (void*) &kCICategoryBlur;
	if (p != NULL) context[@"kCICategoryBlur"] = kCICategoryBlur;
	p = (void*) &kCIAttributeFilterDisplayName;
	if (p != NULL) context[@"kCIAttributeFilterDisplayName"] = kCIAttributeFilterDisplayName;
	p = (void*) &kCIAttributeTypeScalar;
	if (p != NULL) context[@"kCIAttributeTypeScalar"] = kCIAttributeTypeScalar;
	p = (void*) &kCIInputSharpnessKey;
	if (p != NULL) context[@"kCIInputSharpnessKey"] = kCIInputSharpnessKey;
	p = (void*) &kCIAttributeTypeOpaqueColor;
	if (p != NULL) context[@"kCIAttributeTypeOpaqueColor"] = kCIAttributeTypeOpaqueColor;
	p = (void*) &kCIAttributeDefault;
	if (p != NULL) context[@"kCIAttributeDefault"] = kCIAttributeDefault;
	p = (void*) &kCIAttributeReferenceDocumentation;
	if (p != NULL) context[@"kCIAttributeReferenceDocumentation"] = kCIAttributeReferenceDocumentation;
	p = (void*) &kCIInputDepthImageKey;
	if (p != NULL) context[@"kCIInputDepthImageKey"] = kCIInputDepthImageKey;
	p = (void*) &kCIAttributeFilterAvailable_iOS;
	if (p != NULL) context[@"kCIAttributeFilterAvailable_iOS"] = kCIAttributeFilterAvailable_iOS;
	p = (void*) &kCIInputBackgroundImageKey;
	if (p != NULL) context[@"kCIInputBackgroundImageKey"] = kCIInputBackgroundImageKey;
	p = (void*) &kCIInputExtentKey;
	if (p != NULL) context[@"kCIInputExtentKey"] = kCIInputExtentKey;
	p = (void*) &kCIAttributeTypePosition;
	if (p != NULL) context[@"kCIAttributeTypePosition"] = kCIAttributeTypePosition;
	p = (void*) &kCIAttributeTypeColor;
	if (p != NULL) context[@"kCIAttributeTypeColor"] = kCIAttributeTypeColor;
	p = (void*) &kCIInputTransformKey;
	if (p != NULL) context[@"kCIInputTransformKey"] = kCIInputTransformKey;
	p = (void*) &kCIInputRefractionKey;
	if (p != NULL) context[@"kCIInputRefractionKey"] = kCIInputRefractionKey;
	p = (void*) &kCIInputImageKey;
	if (p != NULL) context[@"kCIInputImageKey"] = kCIInputImageKey;
	p = (void*) &kCIAttributeDisplayName;
	if (p != NULL) context[@"kCIAttributeDisplayName"] = kCIAttributeDisplayName;
	p = (void*) &kCICategoryBuiltIn;
	if (p != NULL) context[@"kCICategoryBuiltIn"] = kCICategoryBuiltIn;
	p = (void*) &kCIUISetIntermediate;
	if (p != NULL) context[@"kCIUISetIntermediate"] = kCIUISetIntermediate;
	p = (void*) &kCICategoryGeometryAdjustment;
	if (p != NULL) context[@"kCICategoryGeometryAdjustment"] = kCICategoryGeometryAdjustment;
	p = (void*) &kCIInputGradientImageKey;
	if (p != NULL) context[@"kCIInputGradientImageKey"] = kCIInputGradientImageKey;
	p = (void*) &kCICategoryHighDynamicRange;
	if (p != NULL) context[@"kCICategoryHighDynamicRange"] = kCICategoryHighDynamicRange;
	p = (void*) &kCIInputMaskImageKey;
	if (p != NULL) context[@"kCIInputMaskImageKey"] = kCIInputMaskImageKey;
	p = (void*) &kCIInputContrastKey;
	if (p != NULL) context[@"kCIInputContrastKey"] = kCIInputContrastKey;
	p = (void*) &kCIInputWidthKey;
	if (p != NULL) context[@"kCIInputWidthKey"] = kCIInputWidthKey;
	p = (void*) &kCIAttributeSliderMin;
	if (p != NULL) context[@"kCIAttributeSliderMin"] = kCIAttributeSliderMin;
	p = (void*) &kCIAttributeTypePosition3;
	if (p != NULL) context[@"kCIAttributeTypePosition3"] = kCIAttributeTypePosition3;
	p = (void*) &kCICategoryColorEffect;
	if (p != NULL) context[@"kCICategoryColorEffect"] = kCICategoryColorEffect;
	p = (void*) &kCICategoryStylize;
	if (p != NULL) context[@"kCICategoryStylize"] = kCICategoryStylize;
	p = (void*) &kCIAttributeFilterCategories;
	if (p != NULL) context[@"kCIAttributeFilterCategories"] = kCIAttributeFilterCategories;
	p = (void*) &kCIAttributeTypeRectangle;
	if (p != NULL) context[@"kCIAttributeTypeRectangle"] = kCIAttributeTypeRectangle;
	p = (void*) &kCICategoryDistortionEffect;
	if (p != NULL) context[@"kCICategoryDistortionEffect"] = kCICategoryDistortionEffect;
	p = (void*) &kCIAttributeDescription;
	if (p != NULL) context[@"kCIAttributeDescription"] = kCIAttributeDescription;
	p = (void*) &kCIInputTimeKey;
	if (p != NULL) context[@"kCIInputTimeKey"] = kCIInputTimeKey;
	p = (void*) &kCIUISetAdvanced;
	if (p != NULL) context[@"kCIUISetAdvanced"] = kCIUISetAdvanced;
	p = (void*) &kCIInputIntensityKey;
	if (p != NULL) context[@"kCIInputIntensityKey"] = kCIInputIntensityKey;
	p = (void*) &kCICategoryHalftoneEffect;
	if (p != NULL) context[@"kCICategoryHalftoneEffect"] = kCICategoryHalftoneEffect;
	p = (void*) &kCIAttributeTypeInteger;
	if (p != NULL) context[@"kCIAttributeTypeInteger"] = kCIAttributeTypeInteger;
	p = (void*) &kCICategoryColorAdjustment;
	if (p != NULL) context[@"kCICategoryColorAdjustment"] = kCICategoryColorAdjustment;
	p = (void*) &kCIInputShadingImageKey;
	if (p != NULL) context[@"kCIInputShadingImageKey"] = kCIInputShadingImageKey;
	p = (void*) &kCIAttributeTypeCount;
	if (p != NULL) context[@"kCIAttributeTypeCount"] = kCIAttributeTypeCount;
	p = (void*) &kCIAttributeIdentity;
	if (p != NULL) context[@"kCIAttributeIdentity"] = kCIAttributeIdentity;
	p = (void*) &kCIInputCenterKey;
	if (p != NULL) context[@"kCIInputCenterKey"] = kCIInputCenterKey;
	p = (void*) &kCIAttributeTypeTransform;
	if (p != NULL) context[@"kCIAttributeTypeTransform"] = kCIAttributeTypeTransform;
	p = (void*) &kCICategoryTransition;
	if (p != NULL) context[@"kCICategoryTransition"] = kCICategoryTransition;
	p = (void*) &kCIInputBiasKey;
	if (p != NULL) context[@"kCIInputBiasKey"] = kCIInputBiasKey;
	p = (void*) &kCIAttributeTypeImage;
	if (p != NULL) context[@"kCIAttributeTypeImage"] = kCIAttributeTypeImage;
	p = (void*) &kCIUIParameterSet;
	if (p != NULL) context[@"kCIUIParameterSet"] = kCIUIParameterSet;
	p = (void*) &kCIInputSaturationKey;
	if (p != NULL) context[@"kCIInputSaturationKey"] = kCIInputSaturationKey;
	p = (void*) &kCIAttributeFilterAvailable_Mac;
	if (p != NULL) context[@"kCIAttributeFilterAvailable_Mac"] = kCIAttributeFilterAvailable_Mac;
	p = (void*) &kCICategoryCompositeOperation;
	if (p != NULL) context[@"kCICategoryCompositeOperation"] = kCICategoryCompositeOperation;
	p = (void*) &kCICategoryFilterGenerator;
	if (p != NULL) context[@"kCICategoryFilterGenerator"] = kCICategoryFilterGenerator;
	p = (void*) &kCICategoryStillImage;
	if (p != NULL) context[@"kCICategoryStillImage"] = kCICategoryStillImage;
	p = (void*) &kCIInputBrightnessKey;
	if (p != NULL) context[@"kCIInputBrightnessKey"] = kCIInputBrightnessKey;
	p = (void*) &kCIAttributeTypeBoolean;
	if (p != NULL) context[@"kCIAttributeTypeBoolean"] = kCIAttributeTypeBoolean;
	p = (void*) &kCIAttributeClass;
	if (p != NULL) context[@"kCIAttributeClass"] = kCIAttributeClass;
	p = (void*) &kCICategoryInterlaced;
	if (p != NULL) context[@"kCICategoryInterlaced"] = kCICategoryInterlaced;
	p = (void*) &kCIInputEVKey;
	if (p != NULL) context[@"kCIInputEVKey"] = kCIInputEVKey;
	p = (void*) &kCICategoryGradient;
	if (p != NULL) context[@"kCICategoryGradient"] = kCICategoryGradient;
	p = (void*) &kCIAttributeTypeOffset;
	if (p != NULL) context[@"kCIAttributeTypeOffset"] = kCIAttributeTypeOffset;
	p = (void*) &kCIAttributeFilterName;
	if (p != NULL) context[@"kCIAttributeFilterName"] = kCIAttributeFilterName;
	p = (void*) &kCIInputWeightsKey;
	if (p != NULL) context[@"kCIInputWeightsKey"] = kCIInputWeightsKey;
	p = (void*) &kCIAttributeName;
	if (p != NULL) context[@"kCIAttributeName"] = kCIAttributeName;
	p = (void*) &kCIAttributeTypeGradient;
	if (p != NULL) context[@"kCIAttributeTypeGradient"] = kCIAttributeTypeGradient;
	p = (void*) &kCIAttributeSliderMax;
	if (p != NULL) context[@"kCIAttributeSliderMax"] = kCIAttributeSliderMax;
	p = (void*) &kCIAttributeType;
	if (p != NULL) context[@"kCIAttributeType"] = kCIAttributeType;
	p = (void*) &kCICategoryGenerator;
	if (p != NULL) context[@"kCICategoryGenerator"] = kCICategoryGenerator;
	p = (void*) &kCIInputScaleKey;
	if (p != NULL) context[@"kCIInputScaleKey"] = kCIInputScaleKey;
	p = (void*) &kCIInputAngleKey;
	if (p != NULL) context[@"kCIInputAngleKey"] = kCIInputAngleKey;
	p = (void*) &kCIInputTargetImageKey;
	if (p != NULL) context[@"kCIInputTargetImageKey"] = kCIInputTargetImageKey;
	p = (void*) &kCIAttributeTypeTime;
	if (p != NULL) context[@"kCIAttributeTypeTime"] = kCIAttributeTypeTime;
	p = (void*) &kCICategoryNonSquarePixels;
	if (p != NULL) context[@"kCICategoryNonSquarePixels"] = kCICategoryNonSquarePixels;
	p = (void*) &kCICategorySharpen;
	if (p != NULL) context[@"kCICategorySharpen"] = kCICategorySharpen;
	p = (void*) &kCICategoryVideo;
	if (p != NULL) context[@"kCICategoryVideo"] = kCICategoryVideo;
	p = (void*) &kCIAttributeTypeDistance;
	if (p != NULL) context[@"kCIAttributeTypeDistance"] = kCIAttributeTypeDistance;
	p = (void*) &kCIInputVersionKey;
	if (p != NULL) context[@"kCIInputVersionKey"] = kCIInputVersionKey;
	p = (void*) &kCICategoryReduction;
	if (p != NULL) context[@"kCICategoryReduction"] = kCICategoryReduction;
}
void load_CoreImage_CIFilter_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
