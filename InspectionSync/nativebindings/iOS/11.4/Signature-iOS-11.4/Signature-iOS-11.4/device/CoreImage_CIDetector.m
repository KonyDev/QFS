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
	class_addProtocol([CIDetector class], @protocol(CIDetectorInstanceExports));
	class_addProtocol([CIDetector class], @protocol(CIDetectorClassExports));
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
	p = (void*) &CIDetectorMaxFeatureCount;
	if (p != NULL) context[@"CIDetectorMaxFeatureCount"] = CIDetectorMaxFeatureCount;
	p = (void*) &CIDetectorAccuracyLow;
	if (p != NULL) context[@"CIDetectorAccuracyLow"] = CIDetectorAccuracyLow;
	p = (void*) &CIDetectorFocalLength;
	if (p != NULL) context[@"CIDetectorFocalLength"] = CIDetectorFocalLength;
	p = (void*) &CIDetectorSmile;
	if (p != NULL) context[@"CIDetectorSmile"] = CIDetectorSmile;
	p = (void*) &CIDetectorAspectRatio;
	if (p != NULL) context[@"CIDetectorAspectRatio"] = CIDetectorAspectRatio;
	p = (void*) &CIDetectorTracking;
	if (p != NULL) context[@"CIDetectorTracking"] = CIDetectorTracking;
	p = (void*) &CIDetectorAccuracyHigh;
	if (p != NULL) context[@"CIDetectorAccuracyHigh"] = CIDetectorAccuracyHigh;
	p = (void*) &CIDetectorNumberOfAngles;
	if (p != NULL) context[@"CIDetectorNumberOfAngles"] = CIDetectorNumberOfAngles;
	p = (void*) &CIDetectorAccuracy;
	if (p != NULL) context[@"CIDetectorAccuracy"] = CIDetectorAccuracy;
	p = (void*) &CIDetectorTypeFace;
	if (p != NULL) context[@"CIDetectorTypeFace"] = CIDetectorTypeFace;
	p = (void*) &CIDetectorEyeBlink;
	if (p != NULL) context[@"CIDetectorEyeBlink"] = CIDetectorEyeBlink;
	p = (void*) &CIDetectorMinFeatureSize;
	if (p != NULL) context[@"CIDetectorMinFeatureSize"] = CIDetectorMinFeatureSize;
	p = (void*) &CIDetectorTypeQRCode;
	if (p != NULL) context[@"CIDetectorTypeQRCode"] = CIDetectorTypeQRCode;
	p = (void*) &CIDetectorTypeRectangle;
	if (p != NULL) context[@"CIDetectorTypeRectangle"] = CIDetectorTypeRectangle;
	p = (void*) &CIDetectorTypeText;
	if (p != NULL) context[@"CIDetectorTypeText"] = CIDetectorTypeText;
	p = (void*) &CIDetectorImageOrientation;
	if (p != NULL) context[@"CIDetectorImageOrientation"] = CIDetectorImageOrientation;
	p = (void*) &CIDetectorReturnSubFeatures;
	if (p != NULL) context[@"CIDetectorReturnSubFeatures"] = CIDetectorReturnSubFeatures;
}
void load_CoreImage_CIDetector_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
