#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIImagePickerController (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIImagePickerController class], @protocol(UIImagePickerControllerInstanceExports));
	class_addProtocol([UIImagePickerController class], @protocol(UIImagePickerControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"UIVideoAtPathIsCompatibleWithSavedPhotosAlbum"] = ^BOOL(NSString * arg0) {
		return UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIImagePickerControllerSourceTypePhotoLibrary"] = @0;
	context[@"UIImagePickerControllerSourceTypeCamera"] = @1;
	context[@"UIImagePickerControllerSourceTypeSavedPhotosAlbum"] = @2;

	context[@"UIImagePickerControllerQualityTypeHigh"] = @0;
	context[@"UIImagePickerControllerQualityTypeMedium"] = @1;
	context[@"UIImagePickerControllerQualityTypeLow"] = @2;
	context[@"UIImagePickerControllerQualityType640x480"] = @3;
	context[@"UIImagePickerControllerQualityTypeIFrame1280x720"] = @4;
	context[@"UIImagePickerControllerQualityTypeIFrame960x540"] = @5;

	context[@"UIImagePickerControllerCameraCaptureModePhoto"] = @0;
	context[@"UIImagePickerControllerCameraCaptureModeVideo"] = @1;

	context[@"UIImagePickerControllerCameraDeviceRear"] = @0;
	context[@"UIImagePickerControllerCameraDeviceFront"] = @1;

	context[@"UIImagePickerControllerCameraFlashModeOff"] = @-1;
	context[@"UIImagePickerControllerCameraFlashModeAuto"] = @0;
	context[@"UIImagePickerControllerCameraFlashModeOn"] = @1;

	context[@"UIImagePickerControllerImageURLExportPresetCompatible"] = @0;
	context[@"UIImagePickerControllerImageURLExportPresetCurrent"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIImagePickerControllerMediaType;
	if (p != NULL) context[@"UIImagePickerControllerMediaType"] = UIImagePickerControllerMediaType;
	p = (void*) &UIImagePickerControllerPHAsset;
	if (p != NULL) context[@"UIImagePickerControllerPHAsset"] = UIImagePickerControllerPHAsset;
	p = (void*) &UIImagePickerControllerLivePhoto;
	if (p != NULL) context[@"UIImagePickerControllerLivePhoto"] = UIImagePickerControllerLivePhoto;
	p = (void*) &UIImagePickerControllerEditedImage;
	if (p != NULL) context[@"UIImagePickerControllerEditedImage"] = UIImagePickerControllerEditedImage;
	p = (void*) &UIImagePickerControllerMediaURL;
	if (p != NULL) context[@"UIImagePickerControllerMediaURL"] = UIImagePickerControllerMediaURL;
	p = (void*) &UIImagePickerControllerCropRect;
	if (p != NULL) context[@"UIImagePickerControllerCropRect"] = UIImagePickerControllerCropRect;
	p = (void*) &UIImagePickerControllerMediaMetadata;
	if (p != NULL) context[@"UIImagePickerControllerMediaMetadata"] = UIImagePickerControllerMediaMetadata;
	p = (void*) &UIImagePickerControllerOriginalImage;
	if (p != NULL) context[@"UIImagePickerControllerOriginalImage"] = UIImagePickerControllerOriginalImage;
	p = (void*) &UIImagePickerControllerReferenceURL;
	if (p != NULL) context[@"UIImagePickerControllerReferenceURL"] = UIImagePickerControllerReferenceURL;
	p = (void*) &UIImagePickerControllerImageURL;
	if (p != NULL) context[@"UIImagePickerControllerImageURL"] = UIImagePickerControllerImageURL;
}
void UIKit_UIImagePickerControllerProtocols()
{
	(void)@protocol(UIImagePickerControllerDelegate);
}
void load_UIKit_UIImagePickerController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
