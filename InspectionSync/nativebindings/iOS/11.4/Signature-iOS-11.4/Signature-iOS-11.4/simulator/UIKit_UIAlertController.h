#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAlertController_symbols(JSContext*);
@protocol UIAlertActionInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) UIAlertActionStyle style;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (readonly,nonatomic) NSString * title;
@end
@protocol UIAlertActionClassExports<JSExport, NSCopyingClassExports_>
JSExportAs(actionWithTitleStyleHandler,
+(id) jsactionWithTitle: (NSString *) title style: (UIAlertActionStyle) style handler: (JSValue *) handler );
@end
@protocol UIAlertControllerSpringLoadingCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UIAlertControllerSpringLoadingCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UIAlertControllerInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * textFields;
@property (copy,nonatomic) NSString * title;
@property (nonatomic,strong) UIAlertAction * preferredAction;
@property (readonly,nonatomic) UIAlertControllerStyle preferredStyle;
@property (readonly,nonatomic) NSArray * actions;
@property (copy,nonatomic) NSString * message;
JSExportAs(addTextFieldWithConfigurationHandler,
-(void) jsaddTextFieldWithConfigurationHandler: (JSValue *) configurationHandler );
-(void) addAction: (UIAlertAction *) action ;
@end
@protocol UIAlertControllerClassExports<JSExport>
+(id) alertControllerWithTitle: (NSString *) title message: (NSString *) message preferredStyle: (UIAlertControllerStyle) preferredStyle ;
@end
#pragma clang diagnostic pop