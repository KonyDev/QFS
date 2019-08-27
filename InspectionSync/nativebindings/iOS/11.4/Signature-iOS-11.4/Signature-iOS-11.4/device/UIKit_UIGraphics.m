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
	context[@"UIGraphicsEndImageContext"] = ^void() {
		UIGraphicsEndImageContext();
	};
	context[@"UIGraphicsBeginImageContextWithOptions"] = ^void(CGSize arg0, BOOL arg1, CGFloat arg2) {
		UIGraphicsBeginImageContextWithOptions(arg0, arg1, arg2);
	};
	context[@"UIRectFill"] = ^void(CGRect arg0) {
		UIRectFill(arg0);
	};
	context[@"UIGraphicsGetCurrentContext"] = ^id() {
		return UIGraphicsGetCurrentContext();
	};
	context[@"UIGraphicsBeginImageContext"] = ^void(CGSize arg0) {
		UIGraphicsBeginImageContext(arg0);
	};
	context[@"UIGraphicsPopContext"] = ^void() {
		UIGraphicsPopContext();
	};
	context[@"UIRectFillUsingBlendMode"] = ^void(CGRect arg0, CGBlendMode arg1) {
		UIRectFillUsingBlendMode(arg0, arg1);
	};
	context[@"UIGraphicsPushContext"] = ^void(id arg0) {
		UIGraphicsPushContext(arg0);
	};
	context[@"UIGraphicsGetImageFromCurrentImageContext"] = ^UIImage *() {
		return UIGraphicsGetImageFromCurrentImageContext();
	};
	context[@"UIGraphicsSetPDFContextDestinationForRect"] = ^void(NSString * arg0, CGRect arg1) {
		UIGraphicsSetPDFContextDestinationForRect(arg0, arg1);
	};
	context[@"UIRectFrame"] = ^void(CGRect arg0) {
		UIRectFrame(arg0);
	};
	context[@"UIRectFrameUsingBlendMode"] = ^void(CGRect arg0, CGBlendMode arg1) {
		UIRectFrameUsingBlendMode(arg0, arg1);
	};
	context[@"UIGraphicsBeginPDFPage"] = ^void() {
		UIGraphicsBeginPDFPage();
	};
	context[@"UIRectClip"] = ^void(CGRect arg0) {
		UIRectClip(arg0);
	};
	context[@"UIGraphicsBeginPDFContextToFile"] = ^BOOL(NSString * arg0, CGRect arg1, NSDictionary * arg2) {
		return UIGraphicsBeginPDFContextToFile(arg0, arg1, arg2);
	};
	context[@"UIGraphicsSetPDFContextURLForRect"] = ^void(NSURL * arg0, CGRect arg1) {
		UIGraphicsSetPDFContextURLForRect(arg0, arg1);
	};
	context[@"UIGraphicsGetPDFContextBounds"] = ^CGRect() {
		return UIGraphicsGetPDFContextBounds();
	};
	context[@"UIGraphicsBeginPDFContextToData"] = ^void(NSMutableData * arg0, CGRect arg1, NSDictionary * arg2) {
		UIGraphicsBeginPDFContextToData(arg0, arg1, arg2);
	};
	context[@"UIGraphicsEndPDFContext"] = ^void() {
		UIGraphicsEndPDFContext();
	};
	context[@"UIGraphicsAddPDFContextDestinationAtPoint"] = ^void(NSString * arg0, CGPoint arg1) {
		UIGraphicsAddPDFContextDestinationAtPoint(arg0, arg1);
	};
	context[@"UIGraphicsBeginPDFPageWithInfo"] = ^void(CGRect arg0, NSDictionary * arg1) {
		UIGraphicsBeginPDFPageWithInfo(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIGraphics_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
