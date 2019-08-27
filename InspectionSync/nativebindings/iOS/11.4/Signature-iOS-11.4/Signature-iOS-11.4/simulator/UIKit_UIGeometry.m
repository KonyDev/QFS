#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (UIKit_UIGeometry)
+(JSValue*) valueWithUIEdgeInsets: (UIEdgeInsets) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"top": @(s.top),
		@"left": @(s.left),
		@"bottom": @(s.bottom),
		@"right": @(s.right),
	} inContext: context];
}
-(UIEdgeInsets) toUIEdgeInsets {
	return (UIEdgeInsets) {
		(CGFloat) [self[@"top"] toDouble],
		(CGFloat) [self[@"left"] toDouble],
		(CGFloat) [self[@"bottom"] toDouble],
		(CGFloat) [self[@"right"] toDouble],
	};
}
+(JSValue*) valueWithUIOffset: (UIOffset) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"horizontal": @(s.horizontal),
		@"vertical": @(s.vertical),
	} inContext: context];
}
-(UIOffset) toUIOffset {
	return (UIOffset) {
		(CGFloat) [self[@"horizontal"] toDouble],
		(CGFloat) [self[@"vertical"] toDouble],
	};
}
+(JSValue*) valueWithNSDirectionalEdgeInsets: (NSDirectionalEdgeInsets) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"top": @(s.top),
		@"leading": @(s.leading),
		@"bottom": @(s.bottom),
		@"trailing": @(s.trailing),
	} inContext: context];
}
-(NSDirectionalEdgeInsets) toNSDirectionalEdgeInsets {
	return (NSDirectionalEdgeInsets) {
		(CGFloat) [self[@"top"] toDouble],
		(CGFloat) [self[@"leading"] toDouble],
		(CGFloat) [self[@"bottom"] toDouble],
		(CGFloat) [self[@"trailing"] toDouble],
	};
}
@end
static void addProtocols()
{
	class_addProtocol([NSCoder class], @protocol(NSCoderUIGeometryKeyedCodingCategoryInstanceExports));
	class_addProtocol([NSCoder class], @protocol(NSCoderUIGeometryKeyedCodingCategoryClassExports));
	class_addProtocol([NSValue class], @protocol(NSValueNSValueUIGeometryExtensionsCategoryInstanceExports));
	class_addProtocol([NSValue class], @protocol(NSValueNSValueUIGeometryExtensionsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"NSStringFromCGAffineTransform"] = ^NSString *(CGAffineTransform arg0) {
		return NSStringFromCGAffineTransform(arg0);
	};
	context[@"NSStringFromCGVector"] = ^NSString *(CGVector arg0) {
		return NSStringFromCGVector(arg0);
	};
	context[@"NSStringFromCGRect"] = ^NSString *(CGRect arg0) {
		return NSStringFromCGRect(arg0);
	};
	context[@"NSDirectionalEdgeInsetsFromString"] = ^NSDirectionalEdgeInsets(NSString * arg0) {
		return NSDirectionalEdgeInsetsFromString(arg0);
	};
	context[@"NSStringFromCGSize"] = ^NSString *(CGSize arg0) {
		return NSStringFromCGSize(arg0);
	};
	context[@"NSStringFromDirectionalEdgeInsets"] = ^NSString *(NSDirectionalEdgeInsets arg0) {
		return NSStringFromDirectionalEdgeInsets(arg0);
	};
	context[@"UIEdgeInsetsMake"] = ^UIEdgeInsets(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return UIEdgeInsetsMake(arg0, arg1, arg2, arg3);
	};
	context[@"CGSizeFromString"] = ^CGSize(NSString * arg0) {
		return CGSizeFromString(arg0);
	};
	context[@"UIOffsetEqualToOffset"] = ^BOOL(UIOffset arg0, UIOffset arg1) {
		return UIOffsetEqualToOffset(arg0, arg1);
	};
	context[@"UIOffsetFromString"] = ^UIOffset(NSString * arg0) {
		return UIOffsetFromString(arg0);
	};
	context[@"UIEdgeInsetsFromString"] = ^UIEdgeInsets(NSString * arg0) {
		return UIEdgeInsetsFromString(arg0);
	};
	context[@"CGVectorFromString"] = ^CGVector(NSString * arg0) {
		return CGVectorFromString(arg0);
	};
	context[@"NSStringFromUIOffset"] = ^NSString *(UIOffset arg0) {
		return NSStringFromUIOffset(arg0);
	};
	context[@"CGRectFromString"] = ^CGRect(NSString * arg0) {
		return CGRectFromString(arg0);
	};
	context[@"NSDirectionalEdgeInsetsEqualToDirectionalEdgeInsets"] = ^BOOL(NSDirectionalEdgeInsets arg0, NSDirectionalEdgeInsets arg1) {
		return NSDirectionalEdgeInsetsEqualToDirectionalEdgeInsets(arg0, arg1);
	};
	context[@"UIOffsetMake"] = ^UIOffset(CGFloat arg0, CGFloat arg1) {
		return UIOffsetMake(arg0, arg1);
	};
	context[@"UIEdgeInsetsEqualToEdgeInsets"] = ^BOOL(UIEdgeInsets arg0, UIEdgeInsets arg1) {
		return UIEdgeInsetsEqualToEdgeInsets(arg0, arg1);
	};
	context[@"CGPointFromString"] = ^CGPoint(NSString * arg0) {
		return CGPointFromString(arg0);
	};
	context[@"CGAffineTransformFromString"] = ^CGAffineTransform(NSString * arg0) {
		return CGAffineTransformFromString(arg0);
	};
	context[@"NSStringFromUIEdgeInsets"] = ^NSString *(UIEdgeInsets arg0) {
		return NSStringFromUIEdgeInsets(arg0);
	};
	context[@"NSStringFromCGPoint"] = ^NSString *(CGPoint arg0) {
		return NSStringFromCGPoint(arg0);
	};
	context[@"NSDirectionalEdgeInsetsMake"] = ^NSDirectionalEdgeInsets(CGFloat arg0, CGFloat arg1, CGFloat arg2, CGFloat arg3) {
		return NSDirectionalEdgeInsetsMake(arg0, arg1, arg2, arg3);
	};
	context[@"UIEdgeInsetsInsetRect"] = ^CGRect(CGRect arg0, UIEdgeInsets arg1) {
		return UIEdgeInsetsInsetRect(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIRectEdgeNone"] = @0UL;
	context[@"UIRectEdgeTop"] = @1UL;
	context[@"UIRectEdgeLeft"] = @2UL;
	context[@"UIRectEdgeBottom"] = @4UL;
	context[@"UIRectEdgeRight"] = @8UL;
	context[@"UIRectEdgeAll"] = @15UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIEdgeInsetsZero;
	if (p != NULL) context[@"UIEdgeInsetsZero"] = [JSValue valueWithUIEdgeInsets: UIEdgeInsetsZero inContext: context];
	p = (void*) &UIOffsetZero;
	if (p != NULL) context[@"UIOffsetZero"] = [JSValue valueWithUIOffset: UIOffsetZero inContext: context];
	p = (void*) &NSDirectionalEdgeInsetsZero;
	if (p != NULL) context[@"NSDirectionalEdgeInsetsZero"] = [JSValue valueWithNSDirectionalEdgeInsets: NSDirectionalEdgeInsetsZero inContext: context];
}
void load_UIKit_UIGeometry_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
