#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPageViewController (Exports)
-(id) jsinitWithCoder: (NSCoder *) coder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: coder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithTransitionStyle: (UIPageViewControllerTransitionStyle) style navigationOrientation: (UIPageViewControllerNavigationOrientation) navigationOrientation options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithTransitionStyle: style navigationOrientation: navigationOrientation options: options ] autorelease];
	return resultVal__;
}
-(void) jssetViewControllers: (NSArray *) viewControllers direction: (UIPageViewControllerNavigationDirection) direction animated: (BOOL) animated completion: (JSValue *) completion 
{
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self setViewControllers: viewControllers direction: direction animated: animated completion: completion_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIPageViewController class], @protocol(UIPageViewControllerInstanceExports));
	class_addProtocol([UIPageViewController class], @protocol(UIPageViewControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPageViewControllerNavigationOrientationHorizontal"] = @0L;
	context[@"UIPageViewControllerNavigationOrientationVertical"] = @1L;

	context[@"UIPageViewControllerSpineLocationNone"] = @0L;
	context[@"UIPageViewControllerSpineLocationMin"] = @1L;
	context[@"UIPageViewControllerSpineLocationMid"] = @2L;
	context[@"UIPageViewControllerSpineLocationMax"] = @3L;

	context[@"UIPageViewControllerNavigationDirectionForward"] = @0L;
	context[@"UIPageViewControllerNavigationDirectionReverse"] = @1L;

	context[@"UIPageViewControllerTransitionStylePageCurl"] = @0L;
	context[@"UIPageViewControllerTransitionStyleScroll"] = @1L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIPageViewControllerOptionSpineLocationKey;
	if (p != NULL) context[@"UIPageViewControllerOptionSpineLocationKey"] = UIPageViewControllerOptionSpineLocationKey;
	p = (void*) &UIPageViewControllerOptionInterPageSpacingKey;
	if (p != NULL) context[@"UIPageViewControllerOptionInterPageSpacingKey"] = UIPageViewControllerOptionInterPageSpacingKey;
}
void UIKit_UIPageViewControllerProtocols()
{
	(void)@protocol(UIPageViewControllerDataSource);
	(void)@protocol(UIPageViewControllerDelegate);
}
void load_UIKit_UIPageViewController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
