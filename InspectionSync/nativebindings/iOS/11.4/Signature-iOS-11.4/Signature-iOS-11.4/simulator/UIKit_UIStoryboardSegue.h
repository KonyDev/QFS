#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStoryboardSegue_symbols(JSContext*);
@protocol UIStoryboardUnwindSegueSourceInstanceExports<JSExport>
@property (readonly,getter=getJsUnwindAction) NSString* jsunwindAction;
@property (readonly) UIViewController * sourceViewController;
@property (readonly) id sender;
@end
@protocol UIStoryboardUnwindSegueSourceClassExports<JSExport>
@end
@protocol UIStoryboardSegueInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSString * identifier;
@property (readonly,nonatomic) __kindof UIViewController * sourceViewController;
@property (readonly,nonatomic) __kindof UIViewController * destinationViewController;
-(void) perform;
JSExportAs(initWithIdentifierSourceDestination,
-(id) jsinitWithIdentifier: (NSString *) identifier source: (UIViewController *) source destination: (UIViewController *) destination );
@end
@protocol UIStoryboardSegueClassExports<JSExport>
JSExportAs(segueWithIdentifierSourceDestinationPerformHandler,
+(id) jssegueWithIdentifier: (NSString *) identifier source: (UIViewController *) source destination: (UIViewController *) destination performHandler: (JSValue *) performHandler );
@end
#pragma clang diagnostic pop