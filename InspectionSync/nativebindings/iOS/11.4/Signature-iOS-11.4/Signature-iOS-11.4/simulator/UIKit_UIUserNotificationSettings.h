#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIUserNotificationSettings_symbols(JSContext*);
@protocol UIMutableUserNotificationActionInstanceExports<JSExport>
@property (getter=isDestructive,assign,nonatomic) BOOL destructive;
@property (copy,nonatomic) NSDictionary * parameters;
@property (copy,nonatomic) NSString * title;
@property (getter=isAuthenticationRequired,assign,nonatomic) BOOL authenticationRequired;
@property (assign,nonatomic) UIUserNotificationActionBehavior behavior;
@property (copy,nonatomic) NSString * identifier;
@property (assign,nonatomic) UIUserNotificationActivationMode activationMode;
@end
@protocol UIMutableUserNotificationActionClassExports<JSExport>
@end
@protocol UIUserNotificationCategoryInstanceExports<JSExport, NSCopyingInstanceExports_, NSMutableCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,copy,nonatomic) NSString * identifier;
-(NSArray *) actionsForContext: (UIUserNotificationActionContext) context ;
-(id) jsinit;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIUserNotificationCategoryClassExports<JSExport, NSCopyingClassExports_, NSMutableCopyingClassExports_, NSSecureCodingClassExports_>
@end
@protocol UIUserNotificationSettingsInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSSet * categories;
@property (readonly,nonatomic) UIUserNotificationType types;
@end
@protocol UIUserNotificationSettingsClassExports<JSExport>
+(id) settingsForTypes: (UIUserNotificationType) types categories: (NSSet *) categories ;
@end
@protocol UIMutableUserNotificationCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSString * identifier;
-(void) setActions: (NSArray *) actions forContext: (UIUserNotificationActionContext) context ;
@end
@protocol UIMutableUserNotificationCategoryClassExports<JSExport>
@end
@protocol UIUserNotificationActionInstanceExports<JSExport, NSCopyingInstanceExports_, NSMutableCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (getter=isDestructive,readonly,assign,nonatomic) BOOL destructive;
@property (readonly,copy,nonatomic) NSDictionary * parameters;
@property (readonly,copy,nonatomic) NSString * title;
@property (getter=isAuthenticationRequired,readonly,assign,nonatomic) BOOL authenticationRequired;
@property (readonly,assign,nonatomic) UIUserNotificationActionBehavior behavior;
@property (readonly,copy,nonatomic) NSString * identifier;
@property (readonly,assign,nonatomic) UIUserNotificationActivationMode activationMode;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(id) jsinit;
@end
@protocol UIUserNotificationActionClassExports<JSExport, NSCopyingClassExports_, NSMutableCopyingClassExports_, NSSecureCodingClassExports_>
@end
#pragma clang diagnostic pop