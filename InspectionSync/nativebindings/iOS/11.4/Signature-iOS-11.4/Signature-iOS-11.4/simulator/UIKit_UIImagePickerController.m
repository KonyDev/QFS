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
	context[@"UIImagePickerControllerSourceTypePhotoLibrary"] = @0L;
	context[@"UIImagePickerControllerSourceTypeCamera"] = @1L;
	context[@"UIImagePickerControllerSourceTypeSavedPhotosAlbum"] = @2L;

	context[@"UIImagePickerControllerQualityTypeHigh"] = @0L;
	context[@"UIImagePickerControllerQualityTypeMedium"] = @1L;
	context[@"UIImagePickerControllerQualityTypeLow"] = @2L;
	context[@"UIImagePickerControllerQualityType640x480"] = @3L;
	context[@"UIImagePickerControllerQualityTypeIFrame1280x720"] = @4L;
	context[@"UIImagePickerControllerQualityTypeIFrame960x540"] = @5L;

	context[@"UIImagePickerControllerCameraCaptureModePhoto"] = @0L;
	context[@"UIImagePickerControllerCameraCaptureModeVideo"] = @1L;

	context[@"UIImagePickerControllerCameraDeviceRear"] = @0L;
	context[@"UIImagePickerControllerCameraDeviceFront"] = @1L;

	context[@"UIImagePickerControllerCameraFlashModeOff"] = @-1L;
	context[@"UIImagePickerControllerCameraFlashModeAuto"] = @0L;
	context[@"UIImagePickerControllerCameraFlashModeOn"] = @1L;

	context[@"UIImagePickerControllerImageURLExportPresetCompatible"] = @0L;
	context[@"UIImagePickerControllerImageURLExportPresetCurrent"] = @1L;

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
